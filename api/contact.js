/**
 * POST /api/contact — endpoint serverless (Vercel / Netlify Functions).
 * La RESEND_API_KEY vive SOLO aquí. Nunca en el frontend.
 */
import { Resend } from 'resend';
import { contactEmail, patientEmail } from '../emails/contact-template.js';

const resend = new Resend(process.env.RESEND_API_KEY);

const hits = new Map(); // rate limit en memoria (best-effort en serverless)
const LIMIT = 5, WINDOW = 10 * 60 * 1000;

const clean = (v = '', max = 500) =>
  String(v).replace(/[\u0000-\u001F\u007F]/g, '').trim().slice(0, max);
const escapeHtml = (v = '') =>
  v.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const SERVICES = ['Implantes dentales','Diseño de sonrisa','Ortodoncia','Blanqueamiento dental',
  'Limpieza y profilaxis','Disfunciones de ATM','Odontología general','Aún no lo sé'];

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Método no permitido' });

  const ip = (req.headers['x-forwarded-for'] || '').split(',')[0] || 'unknown';
  const now = Date.now();
  const log = (hits.get(ip) || []).filter((t) => now - t < WINDOW);
  if (log.length >= LIMIT) return res.status(429).json({ error: 'Demasiadas solicitudes. Escríbenos por WhatsApp.' });
  hits.set(ip, [...log, now]);

  const b = req.body || {};

  // Honeypot: los bots rellenan campos ocultos. Respondemos 200 para no darles señal.
  if (clean(b.website)) return res.status(200).json({ ok: true });

  const data = {
    name: clean(b.name, 80),
    lastname: clean(b.lastname, 80),
    email: clean(b.email, 120).toLowerCase(),
    phone: clean(b.phone, 30),
    service: SERVICES.includes(b.service) ? b.service : 'Aún no lo sé',
    message: clean(b.message, 2000),
    preference: ['WhatsApp', 'Llamada', 'Email'].includes(b.preference) ? b.preference : 'WhatsApp',
    source: clean(b.source, 300),
    utm: clean(b.utm, 300),
  };

  const errors = {};
  if (data.name.length < 2) errors.name = 'Escribe tu nombre.';
  if (data.lastname.length < 2) errors.lastname = 'Escribe tu apellido.';
  if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(data.email)) errors.email = 'Revisa tu correo.';
  if (data.phone.replace(/\D/g, '').length < 7) errors.phone = 'Revisa tu teléfono.';
  if (data.message.length < 10) errors.message = 'Cuéntanos un poco más.';
  if (b.consent !== true && b.consent !== 'true') errors.consent = 'Necesitamos tu autorización de datos.';
  if (Object.keys(errors).length) return res.status(400).json({ errors });

  const safe = Object.fromEntries(Object.entries(data).map(([k, v]) => [k, escapeHtml(v)]));
  safe.date = new Intl.DateTimeFormat('es-CO', {
    dateStyle: 'full', timeStyle: 'short', timeZone: 'America/Bogota',
  }).format(new Date());

  try {
    await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: process.env.CONTACT_EMAIL,
      replyTo: data.email,
      subject: `Nuevo contacto desde Axia Odontología — ${safe.service}`,
      html: contactEmail(safe),
    });
    await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: data.email,
      subject: 'Recibimos tu solicitud — Axia Odontología',
      html: patientEmail(safe),
    });
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error('[contact] resend error', e);
    return res.status(502).json({ error: 'No pudimos enviar el mensaje. Escríbenos por WhatsApp.' });
  }
}

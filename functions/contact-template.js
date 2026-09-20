const INK = '#23201C', SAND = '#B98A5E', BG = '#F7F3ED', BORDER = '#E2D8CA';

const shell = (title, inner) => `<!doctype html>
<html lang="es"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${title}</title></head>
<body style="margin:0;padding:0;background:${BG};font-family:'Helvetica Neue',Arial,sans-serif;color:${INK}">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BG};padding:32px 12px">
<tr><td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#FFFDFA;border:1px solid ${BORDER};border-radius:4px">
<tr><td style="padding:28px 32px;border-bottom:1px solid ${BORDER}">
  <div style="font-size:18px;letter-spacing:.22em;text-transform:uppercase">AXIA</div>
  <div style="font-size:11px;letter-spacing:.28em;text-transform:uppercase;color:${SAND};margin-top:4px">Odontología · Barranquilla</div>
</td></tr>
<tr><td style="padding:32px">${inner}</td></tr>
<tr><td style="padding:20px 32px;border-top:1px solid ${BORDER};font-size:12px;line-height:1.6;color:#6B655C">
  Axia Odontología · Barranquilla, Colombia<br>
  <a href="https://wa.me/573159679895" style="color:${SAND}">WhatsApp</a> ·
  <a href="https://www.axiaodontologia.com" style="color:${SAND}">axiaodontologia.com</a>
</td></tr>
</table></td></tr></table></body></html>`;

const row = (k, v) => `<tr>
  <td style="padding:10px 0;border-bottom:1px solid ${BORDER};font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:#6B655C;width:38%;vertical-align:top">${k}</td>
  <td style="padding:10px 0;border-bottom:1px solid ${BORDER};font-size:15px;line-height:1.5">${v || '—'}</td></tr>`;

export const contactEmail = (d) => shell('Nuevo contacto desde Axia Odontología', `
<h1 style="margin:0 0 6px;font-size:22px;font-weight:500">Nuevo contacto desde la web</h1>
<p style="margin:0 0 24px;font-size:14px;color:#6B655C">Interés en <strong style="color:${INK}">${d.service}</strong>. Responde a este correo para escribirle directamente.</p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
${row('Nombre', d.name + ' ' + d.lastname)}
${row('Email', `<a href="mailto:${d.email}" style="color:${SAND}">${d.email}</a>`)}
${row('Teléfono', `<a href="https://wa.me/${d.phone.replace(/\\D/g,'')}" style="color:${SAND}">${d.phone}</a>`)}
${row('Prefiere', d.preference)}
${row('Servicio', d.service)}
${row('Mensaje', d.message.replace(/\n/g, '<br>'))}
${row('Página de origen', d.source)}
${row('Campaña', d.utm)}
${row('Fecha', d.date)}
</table>
<p style="margin:24px 0 0"><a href="https://wa.me/${d.phone.replace(/\\D/g,'')}" style="display:inline-block;background:${INK};color:#FFFDFA;text-decoration:none;padding:14px 24px;font-size:14px;border-radius:2px">Escribir por WhatsApp</a></p>`);

export const patientEmail = (d) => shell('Recibimos tu solicitud', `
<h1 style="margin:0 0 14px;font-size:22px;font-weight:500">Gracias por escribirnos, ${d.name}</h1>
<p style="margin:0 0 16px;font-size:15px;line-height:1.7">Hemos recibido tu solicitud sobre <strong>${d.service}</strong>. Nuestro equipo se pondrá en contacto contigo para coordinar tu cita.</p>
<p style="margin:0 0 24px;font-size:15px;line-height:1.7">Si prefieres resolverlo ahora mismo, escríbenos por WhatsApp y te atendemos de inmediato.</p>
<p style="margin:0"><a href="https://wa.me/573159679895?text=Hola%2C%20acabo%20de%20escribirles%20por%20la%20web" style="display:inline-block;background:${SAND};color:#fff;text-decoration:none;padding:14px 24px;font-size:14px;border-radius:2px">Hablar por WhatsApp</a></p>`);

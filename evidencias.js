/**
 * ============================================================
 *  CRISVID PORTFOLIO — evidencias.js
 * ============================================================
 *  👉 AQUÍ AGREGAS TUS EVIDENCIAS.
 *
 *  📁 TUS CARPETAS EN GITHUB (mayúsculas exactas):
 *     Evidencias/Modelado/
 *     Evidencias/Normalizacion/
 *     Evidencias/SQL/
 *     Evidencias/Proyecto/
 *
 *  ✅ PARA IMÁGENES (PNG, JPG):
 *     { img: "Evidencias/Modelado/archivo.png", titulo: "...", tag: "...", descripcion: "..." }
 *
 *  ✅ PARA PDFs — usa "pdf" en lugar de "img":
 *     { pdf: "Evidencias/Modelado/archivo.pdf", titulo: "...", tag: "...", descripcion: "..." }
 *
 *  ⚠️  Si el nombre tiene espacios, usa %20. Ej: "mi archivo.pdf" → "mi%20archivo.pdf"
 * ============================================================
 */
 
const EVIDENCIAS = {
 
  /* ---- MODELADO / MERE ---- */
  modelado: [
    {
      img: "Evidencias/Modelado/Ejercicio_Hospital.drawio.png",
      titulo: "Sistema Hospitalario",
      tag: "MER · Ejercicio 1",
      descripcion: "Diagrama entidad-relación para gestión de pacientes, médicos y citas."
    },
    {
      img: "Evidencias/Modelado/Ejercicio1_Taller%20_MER.drawio.png",
      titulo: "Taller Pedidos",
      tag: "MER · Ejercicio 2",
      descripcion: "Diagrama entidad-relación para gestión de pedidos."
    },

    {
      img: "Evidencias/Modelado/Taller_Modelado_Avanzado_Comidas.png",
      titulo: "Taller ComidaRapida",
      tag: "MERE · Ejercicio 3",
      descripcion: "Diagrama entidad-relación para gestión de Comida y pedidos."
    },

   {
      img: "Evidencias/Modelado/Residuos_Toxicos.png",
      titulo: "Taller ResiduosToxicos",
      tag: "MERE · Ejercicio 4",
      descripcion: "Diagrama entidad-relación para gestión de Residuos Toxicos."
    },

   {
      img: "Evidencias/Modelado/Ejercicio_empleados.png",
      titulo: "Taller Empleados",
      tag: "MERE · Ejercicio 5",
      descripcion: "Diagrama entidad-relación para gestión de Empleados."
    },

    {
      img: "Evidencias/Modelado/MER_GYM_V1.drawio.png",
      titulo: "MER Version1 Gym",
      tag: "MER · Ejercicio 6",
      descripcion: "Diagrama entidad-relación para gestión de gimnasio."
    },
    // 📌 PLANTILLA IMAGEN:
    // { img: "Evidencias/Modelado/NOMBRE.png", titulo: "...", tag: "MERE · Ejercicio X", descripcion: "..." },
 
    // 📌 PLANTILLA PDF:
    // { pdf: "Evidencias/Modelado/NOMBRE.pdf", titulo: "...", tag: "MERE · Ejercicio X", descripcion: "..." },
  ],
 
  /* ---- NORMALIZACIÓN ---- */
  normalizacion: [
    // { img: "Evidencias/Normalizacion/NOMBRE.png", titulo: "...", tag: "1FN · 2FN · 3FN", descripcion: "..." },
    // { pdf: "Evidencias/Normalizacion/NOMBRE.pdf", titulo: "...", tag: "1FN · 2FN · 3FN", descripcion: "..." },
   { pdf: "Evidencias/Normalizacion/Practica_Normalizacion_Pilotos1.pdf", titulo: "Ejercicio Pilotos Normalizacion", tag: "1FN · 2FN · 3FN", descripcion: "Ejercicio Basico de normalizacion " },
   { pdf: "Evidencias/Normalizacion/Ejercicio_Taller_Normalizacion.pdf", titulo: "Ejercicio en clase Estudiante", tag: "1FN · 2FN · 3FN", descripcion: "Ejercicio Basico de Estudiante" },
  ],
 
  /* ---- SQL / ORACLE ---- */
  sql: [
    // { img: "Evidencias/SQL/NOMBRE.png", titulo: "...", tag: "Oracle · DDL", descripcion: "..." },
    // { pdf: "Evidencias/SQL/NOMBRE.pdf", titulo: "...", tag: "Oracle · DML", descripcion: "..." },
     { img: "Evidencias/sql/Consulta_Basica1_SQL.png", titulo: "Consulta Basica SQL", tag: "Oracle · DDL", descripcion: "Consultas basicas de SQL, mostrar todos los empleados" },
   { img: "Evidencias/sql/Consulta_Basica2_SQL.png", titulo: "Consulta Basica SQL", tag: "Oracle · DDL", descripcion: "Consultas basicas de SQL" },
   { img: "Evidencias/sql/Consulta_Basica3_SQL.png", titulo: "Consulta Basica SQL", tag: "Oracle · DDL", descripcion: "Consultas basicas de SQL" },
   { img: "Evidencias/sql/Consulta_Basica4_SQL.png", titulo: "Consulta Basica SQL", tag: "Oracle · DDL", descripcion: "Consultas basicas de SQL" },
    { img: "Evidencias/sql/Consulta_Basica5_SQL.png", titulo: "Consulta Basica SQL", tag: "Oracle · DDL", descripcion: "Consultas basicas de SQL" },
    { img: "Evidencias/sql/Consulta_Basica6_SQL.png", titulo: "Consulta Basica SQL", tag: "Oracle · DDL", descripcion: "Consultas basicas de SQL" },
    { img: "Evidencias/sql/Consulta_Basica7_SQL.png", titulo: "Consulta Basica SQL", tag: "Oracle · DDL", descripcion: "Consultas basicas de SQL" },
    { img: "Evidencias/sql/Consulta_Basica8_SQL.png", titulo: "Consulta Basica SQL", tag: "Oracle · DDL", descripcion: "Consultas basicas de SQL" },
  ],
 
  /* ---- PROYECTO FINAL ---- */
  proyecto: [
    // { img: "Evidencias/Proyecto/NOMBRE.png", titulo: "...", tag: "Proyecto Final", descripcion: "..." },
    // { pdf: "Evidencias/Proyecto/NOMBRE.pdf", titulo: "...", tag: "Proyecto Final", descripcion: "..." },
     { img: "Evidencias/proyecto/MER_GYM_V1.drawio.png", titulo: "MER V1 Proyecto GYM", tag: "Proyecto Final", descripcion: "version mas basica Mer del proyecto " },
  ]
 
};
 
/* ============================================================
   NO TOQUES NADA DEBAJO DE ESTA LÍNEA
   ============================================================ */
 
function renderGallery(seccion) {
  var data    = EVIDENCIAS[seccion] || [];
  var gallery = document.getElementById('gallery-' + seccion);
  var empty   = document.getElementById('empty-' + seccion);
  if (!gallery) return;
  if (data.length === 0) { if (empty) empty.classList.add('show'); return; }
 
  gallery.innerHTML = data.map(function(ev, i) {
    var esPDF = ev.pdf || (ev.img && ev.img.toLowerCase().endsWith('.pdf'));
 
    if (esPDF) {
      var ruta = ev.pdf || ev.img;
      return '<div class="ev-card ev-card-pdf">' +
        '<div class="ev-thumb ev-thumb-pdf">' +
          '<i class="ri-file-pdf-2-line"></i>' +
          '<span>' + ev.titulo + '</span>' +
        '</div>' +
        '<div class="ev-info">' +
          '<div class="ev-info-tag">' + ev.tag + '</div>' +
          '<h4>' + ev.titulo + '</h4>' +
          '<p>' + ev.descripcion + '</p>' +
          '<a href="' + ruta + '" target="_blank" class="ev-pdf-btn">' +
            '<i class="ri-external-link-line"></i> Ver PDF' +
          '</a>' +
        '</div></div>';
    }
 
    return '<div class="ev-card" onclick="openLightbox(\'' + seccion + '\',' + i + ')">' +
      '<div class="ev-thumb">' +
        '<img src="' + ev.img + '" alt="' + ev.titulo + '" loading="lazy" ' +
             'onerror="this.style.display=\'none\';this.parentElement.innerHTML+=\'<div class=ev-thumb-placeholder><i class=ri-image-2-line></i><span>Imagen no encontrada</span></div>\'">' +
        '<div class="ev-zoom"><i class="ri-zoom-in-line"></i></div>' +
      '</div>' +
      '<div class="ev-info">' +
        '<div class="ev-info-tag">' + ev.tag + '</div>' +
        '<h4>' + ev.titulo + '</h4>' +
        '<p>' + ev.descripcion + '</p>' +
      '</div></div>';
  }).join('');
}
 
['modelado','normalizacion','sql','proyecto'].forEach(renderGallery);
 
/* ---- LIGHTBOX (solo imágenes) ---- */
var lbSection = '', lbIndex = 0;
 
function openLightbox(seccion, index) {
  lbSection = seccion; lbIndex = index;
  updateLightbox();
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function updateLightbox() {
  var ev = EVIDENCIAS[lbSection][lbIndex];
  document.getElementById('lbImg').src = ev.img;
  document.getElementById('lbTitle').textContent   = ev.titulo;
  document.getElementById('lbCounter').textContent = (lbIndex+1) + ' / ' + EVIDENCIAS[lbSection].length;
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('lbClose').addEventListener('click', closeLightbox);
document.getElementById('lbPrev').addEventListener('click', function() {
  lbIndex = (lbIndex - 1 + EVIDENCIAS[lbSection].length) % EVIDENCIAS[lbSection].length;
  updateLightbox();
});
document.getElementById('lbNext').addEventListener('click', function() {
  lbIndex = (lbIndex + 1) % EVIDENCIAS[lbSection].length;
  updateLightbox();
});
document.getElementById('lightbox').addEventListener('click', function(e) {
  if (e.target === document.getElementById('lightbox')) closeLightbox();
});
document.addEventListener('keydown', function(e) {
  if (!document.getElementById('lightbox').classList.contains('open')) return;
  if (e.key === 'Escape')     closeLightbox();
  if (e.key === 'ArrowLeft')  document.getElementById('lbPrev').click();
  if (e.key === 'ArrowRight') document.getElementById('lbNext').click();
});

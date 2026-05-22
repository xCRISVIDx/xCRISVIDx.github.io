/**
 * ============================================================
 *  CRISVID PORTFOLIO — evidencias.js
 * ============================================================
 *  👉 AQUÍ AGREGAS TUS EVIDENCIAS.
 *
 *  📁 TUS CARPETAS EN GITHUB (respeta mayúsculas exactas):
 *     Evidencias/Modelado/
 *     Evidencias/Normalizacion/
 *     Evidencias/SQL/
 *     Evidencias/Proyecto/
 *
 *  ✅ PASOS:
 *  1. Sube tu imagen a la carpeta en GitHub
 *  2. Copia el nombre EXACTO del archivo (con mayúsculas/minúsculas)
 *  3. Agrega el objeto en el array de abajo
 *  4. Commit & push
 * ============================================================
 */
 
const EVIDENCIAS = {
 
  /* ---- MODELADO / MERE ---- */
  modelado: [
    {
      img: "Evidencias/Modelado/Ejercicio_Hospital.drawio.png",
      titulo: "Sistema Hospitalario",
      tag: "MERE · Ejercicio 1",
      descripcion: "Diagrama entidad-relación para gestión de pacientes, médicos y citas."
    },
    {
      img: "Evidencias/Modelado/Ejercicio1_Taller%20_MER.drawio.png",
      titulo: "Taller Pedidos",
      tag: "MERE · Ejercicio 2",
      descripcion: "Diagrama entidad-relación para gestión de pedidos."
    },
 
    // 📌 PLANTILLA — copia y pega para agregar más:
    // {
    //   img: "Evidencias/Modelado/NOMBRE_EXACTO.png",
    //   titulo: "Nombre del ejercicio",
    //   tag: "MERE · Ejercicio X",
    //   descripcion: "Descripción corta."
    // },
  ],
 
  /* ---- NORMALIZACIÓN ---- */
  normalizacion: [
    // {
    //   img: "Evidencias/Normalizacion/NOMBRE_EXACTO.png",
    //   titulo: "Normalización Ejercicio X",
    //   tag: "1FN · 2FN · 3FN",
    //   descripcion: "Descomposición hasta tercera forma normal."
    // },
  ],
 
  /* ---- SQL / ORACLE ---- */
  sql: [
    // {
    //   img: "Evidencias/SQL/NOMBRE_EXACTO.png",
    //   titulo: "Script DDL — Tabla X",
    //   tag: "Oracle · DDL",
    //   descripcion: "Descripción del script."
    // },
  ],
 
  /* ---- PROYECTO FINAL ---- */
  proyecto: [
    // {
    //   img: "Evidencias/Proyecto/NOMBRE_EXACTO.png",
    //   titulo: "Modelo — Gimnasio",
    //   tag: "Proyecto Final",
    //   descripcion: "Descripción de la evidencia."
    // },
  ]
 
};
 
/* ============================================================
   NO MODIFIQUES NADA DEBAJO DE ESTA LÍNEA
   ============================================================ */
 
function renderGallery(seccion) {
  const data = EVIDENCIAS[seccion] || [];
  const gallery = document.getElementById('gallery-' + seccion);
  const empty   = document.getElementById('empty-' + seccion);
 
  if (!gallery) return;
 
  if (data.length === 0) {
    if (empty) empty.classList.add('show');
    return;
  }
 
  gallery.innerHTML = data.map(function(ev, i) {
    return '<div class="ev-card" data-section="' + seccion + '" data-index="' + i + '" onclick="openLightbox(\'' + seccion + '\',' + i + ')">' +
      '<div class="ev-thumb">' +
        '<img src="' + ev.img + '" alt="' + ev.titulo + '" loading="lazy" ' +
             'onerror="this.parentElement.innerHTML=\'<div class=ev-thumb-placeholder><i class=ri-image-2-line></i><span>Imagen no encontrada</span></div>\'">' +
        '<div class="ev-zoom"><i class="ri-zoom-in-line"></i></div>' +
      '</div>' +
      '<div class="ev-info">' +
        '<div class="ev-info-tag">' + ev.tag + '</div>' +
        '<h4>' + ev.titulo + '</h4>' +
        '<p>' + ev.descripcion + '</p>' +
      '</div>' +
    '</div>';
  }).join('');
}
 
['modelado', 'normalizacion', 'sql', 'proyecto'].forEach(renderGallery);
 
/* ---- LIGHTBOX ---- */
var lbSection = '';
var lbIndex   = 0;
 
function openLightbox(seccion, index) {
  lbSection = seccion;
  lbIndex   = index;
  updateLightbox();
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
 
function updateLightbox() {
  var data = EVIDENCIAS[lbSection];
  var ev   = data[lbIndex];
  document.getElementById('lbImg').src = ev.img;
  document.getElementById('lbTitle').textContent   = ev.titulo;
  document.getElementById('lbCounter').textContent = (lbIndex + 1) + ' / ' + data.length;
}
 
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}
 
document.getElementById('lbClose').addEventListener('click', closeLightbox);
 
document.getElementById('lbPrev').addEventListener('click', function() {
  var data = EVIDENCIAS[lbSection];
  lbIndex = (lbIndex - 1 + data.length) % data.length;
  updateLightbox();
});
 
document.getElementById('lbNext').addEventListener('click', function() {
  var data = EVIDENCIAS[lbSection];
  lbIndex = (lbIndex + 1) % data.length;
  updateLightbox();
});
 
document.getElementById('lightbox').addEventListener('click', function(e) {
  if (e.target === document.getElementById('lightbox')) closeLightbox();
});
 
document.addEventListener('keydown', function(e) {
  if (!document.getElementById('lightbox').classList.contains('open')) return;
  if (e.key === 'Escape')      closeLightbox();
  if (e.key === 'ArrowLeft')   document.getElementById('lbPrev').click();
  if (e.key === 'ArrowRight')  document.getElementById('lbNext').click();
});

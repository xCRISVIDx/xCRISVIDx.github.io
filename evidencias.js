/**
 * ============================================================
 *  CRISVID PORTFOLIO — evidencias.js
 * ============================================================
 *  👉 AQUÍ AGREGAS TUS EVIDENCIAS.
 *
 *  Para cada sección (modelado, normalizacion, sql, proyecto)
 *  hay un array. Solo sigue el formato de los ejemplos.
 *
 *  📁 CARPETAS donde debes subir tus imágenes en GitHub:
 *     evidencias/modelado/
 *     evidencias/normalizacion/
 *     evidencias/sql/
 *     evidencias/proyecto/
 *
 *  ✅ PASOS para agregar una evidencia:
 *  1. Sube tu imagen a la carpeta correspondiente en GitHub
 *  2. Agrega un objeto al array de esa sección abajo
 *  3. Guarda el archivo y haz commit
 * ============================================================
 */

const EVIDENCIAS = {

  /* ---- MODELADO / MERE ---- */
  modelado: [
    // ✅ EJEMPLO ACTIVO — reemplaza con tu ruta real
    {
      img: "evidencias/modelado/Ejercicio_Hospital.drawio.png",
      titulo: "Sistema Hospitalario",
      tag: "MERE · Nivel 1",
      descripcion: "Diagrama entidad-relación para gestión de pacientes, médicos y citas."
    },

    // 📌 PLANTILLA — copia este bloque, descomenta y rellena:
    // {
    //   img: "evidencias/modelado/NOMBRE_DEL_ARCHIVO.png",
    //   titulo: "Nombre del ejercicio",
    //   tag: "MERE · Nivel X",
    //   descripcion: "Descripción corta de lo que modela."
    // },
  ],

  /* ---- NORMALIZACIÓN ---- */
  normalizacion: [
    // 📌 PLANTILLA:
    // {
    //   img: "evidencias/normalizacion/NOMBRE_DEL_ARCHIVO.png",
    //   titulo: "Ejercicio Normalización X",
    //   tag: "1FN · 2FN · 3FN",
    //   descripcion: "Descomposición de tabla hasta tercera forma normal."
    // },
  ],

  /* ---- SQL / ORACLE ---- */
  sql: [
    // 📌 PLANTILLA:
    // {
    //   img: "evidencias/sql/NOMBRE_DEL_ARCHIVO.png",
    //   titulo: "Script DDL — Tabla Empleados",
    //   tag: "Oracle · DDL",
    //   descripcion: "Creación de tablas con restricciones PRIMARY KEY y FOREIGN KEY."
    // },
  ],

  /* ---- PROYECTO FINAL ---- */
  proyecto: [
    // 📌 PLANTILLA:
    // {
    //   img: "evidencias/proyecto/NOMBRE_DEL_ARCHIVO.png",
    //   titulo: "Modelo Conceptual — Gimnasio",
    //   tag: "Proyecto Final · Parte 1",
    //   descripcion: "Diagrama MERE del sistema de gestión del gimnasio."
    // },
  ]

};

/* ============================================================
   NO MODIFIQUES NADA DEBAJO DE ESTA LÍNEA
   ============================================================ */

function renderGallery(seccion) {
  const data = EVIDENCIAS[seccion] || [];
  const gallery = document.getElementById(`gallery-${seccion}`);
  const empty   = document.getElementById(`empty-${seccion}`);

  if (!gallery) return;

  if (data.length === 0) {
    empty && empty.classList.add('show');
    return;
  }

  gallery.innerHTML = data.map((ev, i) => `
    <div class="ev-card" data-section="${seccion}" data-index="${i}" onclick="openLightbox('${seccion}', ${i})">
      <div class="ev-thumb">
        <img src="${ev.img}" alt="${ev.titulo}" loading="lazy"
             onerror="this.parentElement.innerHTML='<div class=ev-thumb-placeholder><i class=ri-image-2-line></i><span>Imagen no encontrada</span></div>'">
        <div class="ev-zoom"><i class="ri-zoom-in-line"></i></div>
      </div>
      <div class="ev-info">
        <div class="ev-info-tag">${ev.tag}</div>
        <h4>${ev.titulo}</h4>
        <p>${ev.descripcion}</p>
      </div>
    </div>
  `).join('');
}

// Renderizar todas las secciones al cargar
['modelado', 'normalizacion', 'sql', 'proyecto'].forEach(renderGallery);

/* ---- LIGHTBOX ---- */
let lbSection = '';
let lbIndex   = 0;

function openLightbox(seccion, index) {
  lbSection = seccion;
  lbIndex   = index;
  updateLightbox();
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function updateLightbox() {
  const data = EVIDENCIAS[lbSection];
  const ev   = data[lbIndex];
  document.getElementById('lbImg').src     = ev.img;
  document.getElementById('lbTitle').textContent   = ev.titulo;
  document.getElementById('lbCounter').textContent = `${lbIndex + 1} / ${data.length}`;
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('lbClose').addEventListener('click', closeLightbox);

document.getElementById('lbPrev').addEventListener('click', () => {
  const data = EVIDENCIAS[lbSection];
  lbIndex = (lbIndex - 1 + data.length) % data.length;
  updateLightbox();
});

document.getElementById('lbNext').addEventListener('click', () => {
  const data = EVIDENCIAS[lbSection];
  lbIndex = (lbIndex + 1) % data.length;
  updateLightbox();
});

document.getElementById('lightbox').addEventListener('click', (e) => {
  if (e.target === document.getElementById('lightbox')) closeLightbox();
});

document.addEventListener('keydown', (e) => {
  if (!document.getElementById('lightbox').classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft')  document.getElementById('lbPrev').click();
  if (e.key === 'ArrowRight') document.getElementById('lbNext').click();
});

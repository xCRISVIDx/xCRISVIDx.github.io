/* ================================
   CRISVID PORTFOLIO — main.js
   ================================ */

console.log("Portfolio CRISVID cargado 🔥");

/* ---- NAVBAR scroll effect ---- */
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

/* ---- Mobile menu ---- */
const menuBtn  = document.getElementById('menuBtn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Cerrar al hacer clic en un link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ---- EVIDENCE TABS ---- */
const tabs   = document.querySelectorAll('.ev-tab');
const panels = document.querySelectorAll('.ev-panel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;

    tabs.forEach(t => t.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));

    tab.classList.add('active');
    document.getElementById(`tab-${target}`).classList.add('active');
  });
});

/* ---- Scroll reveal (IntersectionObserver) ---- */
const revealEls = document.querySelectorAll(
  '.stack-item, .ev-card, .proj-card, .about-text, .contact-wrap'
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity    = '1';
      entry.target.style.transform  = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => {
  el.style.opacity   = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// Simple mobile menu toggle
document.querySelector('.menu-toggle')?.addEventListener('click', () => {
  const links = document.querySelector('.nav-links');
  if (links) {
    links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
    links.style.flexDirection = 'column';
    links.style.position = 'absolute';
    links.style.top = '60px';
    links.style.right = '20px';
    links.style.background = 'rgba(0,0,0,0.95)';
    links.style.padding = '1.5rem';
    links.style.borderRadius = '12px';
    links.style.border = '1px solid rgba(255,255,255,0.1)';
  }
});

// Smooth reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .nav-card, .gallery-item, .video-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.visible').forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
});

// Force visible class after short delay for initial elements
setTimeout(() => {
  document.querySelectorAll('.card, .nav-card, .gallery-item, .video-card').forEach(el => {
    el.classList.add('visible');
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
}, 100);

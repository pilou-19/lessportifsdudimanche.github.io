// Mode sombre / clair
const modeBtn = document.getElementById('modeToggle');
modeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if(document.body.classList.contains('dark-mode')) {
    modeBtn.textContent = '☀️ Mode Clair';
  } else {
    modeBtn.textContent = '🌙 Mode Sombre';
  }
});

// Animation fade-in articles au scroll
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

cards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = 'translateY(20px)';
  observer.observe(card);
});

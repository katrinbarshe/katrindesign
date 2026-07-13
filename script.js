document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll('.gallery img, .info-photo img, .project-card-bg, .mini-card-bg');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!('IntersectionObserver' in window) || reduceMotion) {
    return;
  }

  targets.forEach((el) => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  targets.forEach((el) => observer.observe(el));
});

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.more-projects-next').forEach((button) => {
    const track = button.closest('.more-projects-scroller').querySelector('.more-projects-track');
    button.addEventListener('click', () => {
      track.scrollBy({ left: track.clientWidth * 0.8, behavior: 'smooth' });
    });
  });
});

(() => {
  const year = document.querySelector('#current-year');
  if (year) year.textContent = new Date().getFullYear();

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, instance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          instance.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  document.querySelectorAll('[data-hubla-link]').forEach((cta) => {
    cta.addEventListener('click', (event) => {
      const destination = cta.dataset.hublaLink?.trim();
      if (!destination) return;
      event.preventDefault();
      window.open(destination, '_blank', 'noopener,noreferrer');
    });
  });
})();

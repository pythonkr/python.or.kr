// Preserve the stable section anchor when switching language.
document.querySelectorAll('[data-language-link]').forEach((link) => {
  const base = link.getAttribute('href');
  const update = () => { link.href = base + window.location.hash; };
  update();
  window.addEventListener('hashchange', update);
});

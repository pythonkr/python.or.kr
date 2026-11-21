const siteNav = document.querySelector('.site-nav');
const menuButton = siteNav?.querySelector('.site-menu-button');
const menu = document.getElementById(menuButton?.getAttribute('aria-controls') ?? '');
const firstMenuLink = menu?.querySelector('a');

if (menuButton && menu && firstMenuLink) {
  const wideLayout = window.matchMedia('(min-width: 48rem)');

  function setMenuOpen(open) {
    menu.hidden = !open;
    menuButton.setAttribute('aria-expanded', String(open));
  }

  function updateLayout() {
    setMenuOpen(wideLayout.matches || menu.contains(document.activeElement));
    if (wideLayout.matches && document.activeElement === menuButton) {
      firstMenuLink.focus();
    }
    menuButton.hidden = wideLayout.matches;
  }

  menuButton.addEventListener('click', () => setMenuOpen(menu.hidden));
  siteNav.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !wideLayout.matches && !menu.hidden) {
      menuButton.focus();
      setMenuOpen(false);
    }
  });

  wideLayout.addEventListener('change', updateLayout);
  updateLayout();
}

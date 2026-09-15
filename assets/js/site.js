/* Navigation and theme switching for the bilingual personal site. */
(() => {
  'use strict';
  const root = document.documentElement;
  const isEnglish = root.lang === 'en';
  const labels = isEnglish ? {
    dark: 'Switch to dark mode',
    light: 'Switch to light mode',
    menuOpen: 'Open navigation menu',
    menuClose: 'Close navigation menu'
  } : {
    dark: '切换深色模式',
    light: '切换浅色模式',
    menuOpen: '展开导航',
    menuClose: '收起导航'
  };
  const themeButton = document.querySelector('#theme-toggle');
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  const desktop = window.matchMedia('(min-width: 701px)');
  let selectedTheme = null;
  try { selectedTheme = localStorage.getItem('theme'); } catch (_) { /* Storage may be unavailable. */ }
  if (!['light', 'dark'].includes(selectedTheme)) selectedTheme = null;

  const applyTheme = (theme) => {
    root.dataset.theme = theme;
    themeButton.setAttribute('aria-pressed', String(theme === 'dark'));
    themeButton.setAttribute('aria-label', theme === 'dark' ? labels.light : labels.dark);
  };
  applyTheme(selectedTheme || (systemTheme.matches ? 'dark' : 'light'));
  themeButton.addEventListener('click', () => {
    selectedTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('theme', selectedTheme); } catch (_) { /* Theme still works in memory. */ }
    applyTheme(selectedTheme);
  });
  systemTheme.addEventListener('change', (event) => {
    if (!selectedTheme) applyTheme(event.matches ? 'dark' : 'light');
  });

  const closeMenu = () => {
    nav.classList.remove('menu-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', labels.menuOpen);
  };
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('menu-open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? labels.menuClose : labels.menuOpen);
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('menu-open')) {
      closeMenu();
      menuButton.focus();
    }
  });
  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target)) closeMenu();
  });
  desktop.addEventListener('change', (event) => { if (event.matches) closeMenu(); });
})();

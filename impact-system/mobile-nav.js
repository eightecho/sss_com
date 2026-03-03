/* ═══════════════════════════════════════════════════════════
   IMPACT SYSTEM — Mobile Navigation Toggle
   stupidsimplestartup.com
═══════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  function init() {
    var hamburger = document.getElementById('mobile-hamburger');
    var sidebar   = document.querySelector('.sidebar');
    var overlay   = document.getElementById('sidebar-overlay');

    if (!hamburger || !sidebar || !overlay) return;

    function openNav() {
      sidebar.classList.add('is-open');
      overlay.classList.add('is-visible');
      hamburger.classList.add('is-open');
      hamburger.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    function closeNav() {
      sidebar.classList.remove('is-open');
      overlay.classList.remove('is-visible');
      hamburger.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    hamburger.addEventListener('click', function () {
      if (sidebar.classList.contains('is-open')) { closeNav(); } else { openNav(); }
    });

    overlay.addEventListener('click', closeNav);

    sidebar.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { setTimeout(closeNav, 80); });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeNav();
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 768) { closeNav(); document.body.style.overflow = ''; }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

/* ═══════════════════════════════════════════════════════════
   IMPACT SYSTEM — Mobile Navigation
   Handles hamburger → slide-in sidebar toggle
═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  function init() {

    /* ── 1. Inject the mobile top bar ─────────────────────── */
    var topBar = document.createElement('div');
    topBar.className = 'mobile-top-bar';
    topBar.innerHTML =
      '<div class="mobile-top-bar-brand">' +
        '<div class="mobile-top-bar-eyebrow">Stupid Simple Startup</div>' +
        '<div class="mobile-top-bar-title">The <strong>IMPACT</strong> System</div>' +
      '</div>' +
      '<button class="mobile-hamburger" id="mobile-hamburger" aria-label="Open navigation" aria-expanded="false">' +
        '<span></span><span></span><span></span>' +
      '</button>';
    document.body.prepend(topBar);

    /* ── 2. Inject the overlay ────────────────────────────── */
    var overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    overlay.id = 'sidebar-overlay';
    document.body.appendChild(overlay);

    /* ── 3. Wire up toggle logic ──────────────────────────── */
    var hamburger = document.getElementById('mobile-hamburger');
    var sidebar   = document.querySelector('.sidebar');

    if (!hamburger || !sidebar) return;

    function openNav() {
      sidebar.classList.add('is-open');
      overlay.classList.add('is-visible');
      hamburger.classList.add('is-open');
      hamburger.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden'; // prevent scroll bleed
    }

    function closeNav() {
      sidebar.classList.remove('is-open');
      overlay.classList.remove('is-visible');
      hamburger.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    function toggleNav() {
      if (sidebar.classList.contains('is-open')) {
        closeNav();
      } else {
        openNav();
      }
    }

    hamburger.addEventListener('click', toggleNav);

    /* Close on overlay tap */
    overlay.addEventListener('click', closeNav);

    /* Close on nav link tap (so page transitions feel snappy) */
    var navLinks = sidebar.querySelectorAll('a');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        // Small delay so user sees the highlight before sidebar closes
        setTimeout(closeNav, 80);
      });
    });

    /* Close on Escape key */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && sidebar.classList.contains('is-open')) {
        closeNav();
      }
    });

    /* ── 4. Reset on desktop resize ──────────────────────── */
    window.addEventListener('resize', function () {
      if (window.innerWidth > 768) {
        closeNav();
        document.body.style.overflow = '';
      }
    });

  }

  /* ── 5. Phase group toggle ────────────────────────────────
     Called via inline onclick from sidebar HTML on all pages.
     Must be global (window.*) because they're invoked from
     onclick="" attributes, outside this IIFE's scope.
  ──────────────────────────────────────────────────────────── */
  window.togglePhase = function (group) {
    var steps  = group.querySelector('.sidebar-phase-steps');
    var isOpen = group.classList.contains('open');
    if (isOpen) {
      group.classList.remove('open');
      if (steps) steps.classList.remove('visible');
    } else {
      group.classList.add('open');
      if (steps) steps.classList.add('visible');
    }
  };

  window.toggleChevron = function (event, chevron) {
    /* Chevron click: toggle the phase without navigating */
    event.stopPropagation();
    event.preventDefault();
    var group = chevron.closest
      ? chevron.closest('.sidebar-phase-group')
      : (function (el) {
          while (el && !el.classList.contains('sidebar-phase-group')) {
            el = el.parentElement;
          }
          return el;
        }(chevron));
    if (group) window.togglePhase(group);
  };

  /* Run after DOM is ready */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

/* ═══════════════════════════════════════════════════════════
   STUPID SIMPLE STARTUP — main.js
   Handles: mobile nav toggle, opt-in modal, footer year
═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── Helpers ─────────────────────────────────────────── */
  function qs(sel, root) { return (root || document).querySelector(sel); }
  function qsa(sel, root) { return Array.from((root || document).querySelectorAll(sel)); }


  /* ── Mobile nav ──────────────────────────────────────── */
  function setupNav() {
    var toggle = qs('[data-nav-toggle]');
    var drawer = qs('.nav-drawer');
    if (!toggle || !drawer) return;

    toggle.addEventListener('click', function () {
      var open = drawer.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });

    /* Close drawer when a link inside it is clicked */
    qsa('a', drawer).forEach(function (a) {
      a.addEventListener('click', function () {
        drawer.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }


  /* ── Opt-in modal ────────────────────────────────────── */
  function setupModal() {
    var modal   = qs('#optinModal');
    if (!modal) return;

    var openers = qsa('[data-open-optin]');
    var closers = qsa('[data-close-optin]');

    function openModal() {
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');

      /* Auto-focus the first input (Kit renders it dynamically) */
      setTimeout(function () {
        var input = qs('input[type="email"]', modal);
        if (input) input.focus();
      }, 60);
    }

    function closeModal() {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');
    }

    openers.forEach(function (btn) {
      btn.addEventListener('click', openModal);
    });

    closers.forEach(function (el) {
      el.addEventListener('click', closeModal);
    });

    /* ESC to close */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
    });
  }


  /* ── Learn-how modal ─────────────────────────────────── */
  function setupLearnHowModal() {
    var modal = qs('#learnhowModal');
    if (!modal) return;

    var openers = qsa('[data-open-learnhow]');
    var closers = qsa('[data-close-learnhow]');

    function openModal() {
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');
    }

    function closeModal() {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');
    }

    openers.forEach(function (btn) { btn.addEventListener('click', openModal); });
    closers.forEach(function (el)  { el.addEventListener('click', closeModal); });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
    });
  }


  /* ── Footer year ─────────────────────────────────────── */
  function setYear() {
    var el = qs('#year');
    if (el) el.textContent = String(new Date().getFullYear());
  }


  /* ── Init ────────────────────────────────────────────── */
  function init() {
    setupNav();
    setupModal();
    setupLearnHowModal();
    setYear();
  }

  document.addEventListener('DOMContentLoaded', init);
}());

/* ═══════════════════════════════════════════════════════════
   STUPID SIMPLE STARTUP — main.js
   Handles: mobile nav toggle, opt-in modal, footer year,
            cookie consent banner
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

    qsa('a', drawer).forEach(function (a) {
      a.addEventListener('click', function () {
        drawer.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }


  /* ── Opt-in modal ────────────────────────────────────── */
  function setupModal() {
    var modal = qs('#optinModal');
    if (!modal) return;

    var openers = qsa('[data-open-optin]');
    var closers = qsa('[data-close-optin]');

    function openModal() {
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');
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

    openers.forEach(function (btn) { btn.addEventListener('click', openModal); });
    closers.forEach(function (el)  { el.addEventListener('click', closeModal); });

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


  /* ── Cookie Consent ──────────────────────────────────── */
  var CONSENT_KEY = 'sss_cookie_consent';

  function loadConvertKit() {
    if (qs('script[src*="convertkit"]')) return;
    var s = document.createElement('script');
    s.src = 'https://f.convertkit.com/ckjs/ck.5.js';
    document.head.appendChild(s);
  }

  function getConsent() {
    try { return localStorage.getItem(CONSENT_KEY); } catch (e) { return null; }
  }

  function saveConsent(val) {
    try { localStorage.setItem(CONSENT_KEY, val); } catch (e) {}
  }

  function dismissBanner() {
    var banner = qs('#cookieBanner');
    if (!banner) return;
    banner.classList.add('is-hiding');
    setTimeout(function () { if (banner.parentNode) banner.parentNode.removeChild(banner); }, 350);
  }

  function acceptCookies() {
    saveConsent('accepted');
    dismissBanner();
    loadConvertKit();
  }

  function declineCookies() {
    saveConsent('declined');
    dismissBanner();
  }

  function buildBanner() {
    var banner = document.createElement('div');
    banner.id = 'cookieBanner';
    banner.setAttribute('role', 'region');
    banner.setAttribute('aria-label', 'Cookie consent');
    banner.innerHTML =
      '<div class="cookie-inner">' +
        '<p class="cookie-text">' +
          'We use cookies to power our email sign-up forms. ' +
          '<a href="/privacy/" class="cookie-link">Privacy&nbsp;Policy</a>.' +
        '</p>' +
        '<div class="cookie-actions">' +
          '<button class="btn-cookie-accept" data-cookie-accept>Accept</button>' +
          '<button class="btn-cookie-decline" data-cookie-decline>Decline</button>' +
        '</div>' +
      '</div>';
    return banner;
  }

  function setupCookieConsent() {
    var stored = getConsent();
    if (stored === 'accepted') { loadConvertKit(); return; }
    if (stored === 'declined') { return; }

    var banner = buildBanner();
    document.body.appendChild(banner);

    requestAnimationFrame(function () {
      requestAnimationFrame(function () { banner.classList.add('is-visible'); });
    });

    qs('[data-cookie-accept]', banner).addEventListener('click', acceptCookies);
    qs('[data-cookie-decline]', banner).addEventListener('click', declineCookies);
  }


  /* ── Init ────────────────────────────────────────────── */
  function init() {
    setupNav();
    setupModal();
    setupLearnHowModal();
    setYear();
    setupCookieConsent();
  }

  document.addEventListener('DOMContentLoaded', init);
}());

(function () {
  "use strict";

  var modal = document.getElementById("optinModal");
  var openButtons = document.querySelectorAll("[data-open-optin]");
  var closeButtons = document.querySelectorAll("[data-close-optin]");
  var yearEl = document.getElementById("year");
  var kitForm = document.getElementById("kitForm");
  var redirectNote = document.getElementById("redirectNote");

  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  function openModal() {
    if (!modal) return;
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    // Try to focus the email field
    window.setTimeout(function () {
      var email = modal.querySelector('input[name="email_address"]');
      if (email) email.focus();
    }, 50);
  }

  function closeModal() {
    if (!modal) return;
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  openButtons.forEach(function (btn) {
    btn.addEventListener("click", openModal);
  });

  closeButtons.forEach(function (btn) {
    btn.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeModal();
  });

  // Redirect handling:
  // - If Kit double opt-in is ON, their redirect may not happen immediately until confirmation.
  // - We provide a simple, predictable fallback: show a note + direct link, and do an optional timed redirect.
  if (kitForm) {
    kitForm.addEventListener("submit", function () {
      // Show the note right away so the user knows what’s happening.
      if (redirectNote) redirectNote.hidden = false;

      // Optional optimistic redirect:
      // If you want to ALWAYS wait for confirmation, delete this timeout block.
      window.setTimeout(function () {
        window.location.href = "https://stupidsimplestartup.com/impact-system";
      }, 1800);
    });
  }
})();

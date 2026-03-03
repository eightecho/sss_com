(() => {
  function qs(sel, root = document) {
    return root.querySelector(sel);
  }
  function qsa(sel, root = document) {
    return Array.from(root.querySelectorAll(sel));
  }

  function setYear() {
    const el = qs("#year");
    if (el) el.textContent = String(new Date().getFullYear());
  }

  function setupOptinModal() {
    const modal = qs("#optinModal");
    if (!modal) return;

    const openers = qsa("[data-open-optin]");
    const closers = qsa("[data-close-optin]");

    function openModal() {
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-open");

      // focus email field if present
      const email = qs('input[name="email_address"]', modal);
      if (email) setTimeout(() => email.focus(), 50);
    }

    function closeModal() {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");
    }

    openers.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        openModal();
      });
    });

    closers.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        closeModal();
      });
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    setYear();
    setupOptinModal();
  });
})();

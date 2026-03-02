// Footer year
const y = document.getElementById("y");
if (y) y.textContent = new Date().getFullYear();

// Opt-in modal
const overlay = document.getElementById("optinOverlay");
const openers = document.querySelectorAll("[data-open-optin]");
const closers = document.querySelectorAll("[data-close-optin]");

function openModal() {
  if (!overlay) return;
  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  if (!overlay) return;
  overlay.classList.remove("open");
  overlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

openers.forEach((el) => el.addEventListener("click", openModal));
closers.forEach((el) => el.addEventListener("click", closeModal));

// Click outside modal closes
if (overlay) {
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });
}

// ESC closes
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && overlay && overlay.classList.contains("open")) closeModal();
});

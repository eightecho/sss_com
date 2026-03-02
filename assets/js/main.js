// Footer year
const y = document.getElementById("y");
if (y) y.textContent = new Date().getFullYear();

// Opt-in modal
const overlay = document.getElementById("optinOverlay");
const openers = document.querySelectorAll("[data-open-optin]");
const closers = document.querySelectorAll("[data-close-optin]");

// Kit embed (lazy-load to avoid hidden-container render issues)
const KIT_UID = "5fd5d63b2c";
const KIT_SRC = "https://tadrobert.kit.com/5fd5d63b2c/index.js";
let kitLoaded = false;

function loadKitForm() {
  if (kitLoaded) return;

  const mount = document.getElementById("kitFormMount");
  if (!mount) return;

  // Clear mount in case anything weird got inserted
  mount.innerHTML = "";

  const s = document.createElement("script");
  s.async = true;
  s.setAttribute("data-uid", KIT_UID);
  s.src = KIT_SRC;
  mount.appendChild(s);

  kitLoaded = true;
}

function openModal() {
  if (!overlay) return;
  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  // Load Kit after modal is visible
  // (ensures correct sizing/render)
  window.requestAnimationFrame(() => loadKitForm());
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

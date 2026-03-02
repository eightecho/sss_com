// Footer year
const y = document.getElementById("y");
if (y) y.textContent = new Date().getFullYear();

// Opt-in modal
const overlay = document.getElementById("optinOverlay");
const openers = document.querySelectorAll("[data-open-optin]");
const closers = document.querySelectorAll("[data-close-optin]");

// Kit embed (lazy-load + detect block)
const KIT_UID = "5fd5d63b2c";
const KIT_SRC = "https://tadrobert.kit.com/5fd5d63b2c/index.js";
let kitLoaded = false;

function showKitFallback() {
  const fb = document.getElementById("kitFallback");
  if (fb) fb.style.display = "block";
}

function kitRendered() {
  // Kit typically injects elements containing "formkit"
  return !!document.querySelector('[class*="formkit"], form[action*="kit.com"], iframe[src*="kit.com"]');
}

function loadKitForm() {
  if (kitLoaded) return;

  const mount = document.getElementById("kitFormMount");
  if (!mount) return;

  mount.innerHTML = "";
  const fb = document.getElementById("kitFallback");
  if (fb) fb.style.display = "none";

  const s = document.createElement("script");
  s.async = true;
  s.setAttribute("data-uid", KIT_UID);
  s.src = KIT_SRC;

  s.onerror = () => {
    // Most common cause: adblock/privacy extension blocking kit.com
    showKitFallback();
  };

  mount.appendChild(s);
  kitLoaded = true;

  // If the script loads but doesn't render, show fallback after a short timeout
  setTimeout(() => {
    if (!kitRendered()) showKitFallback();
  }, 1800);
}

function openModal() {
  if (!overlay) return;
  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  // Load after modal is visible
  requestAnimationFrame(loadKitForm);
}

function closeModal() {
  if (!overlay) return;
  overlay.classList.remove("open");
  overlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

openers.forEach((el) => el.addEventListener("click", openModal));
closers.forEach((el) => el.addEventListener("click", closeModal));

if (overlay) {
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && overlay && overlay.classList.contains("open")) closeModal();
});

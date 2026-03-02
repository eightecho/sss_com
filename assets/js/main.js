// Footer year
const y = document.getElementById("y");
if (y) y.textContent = new Date().getFullYear();

// Modal
const overlay = document.getElementById("optinOverlay");
const openers = document.querySelectorAll("[data-open-optin]");
const closers = document.querySelectorAll("[data-close-optin]");

let kitMoved = false;
let moveAttempts = 0;

function findRenderedKitNode(container) {
  if (!container) return null;
  return (
    container.querySelector(".formkit-form") ||
    container.querySelector("form") ||
    container.querySelector('iframe[src*="kit.com"]') ||
    container.querySelector('iframe[src*="convertkit.com"]')
  );
}

function moveKitIntoModal() {
  if (kitMoved) return;

  const hidden = document.getElementById("kitHidden");
  const mount = document.getElementById("kitMount");
  if (!hidden || !mount) return;

  const rendered = findRenderedKitNode(hidden);

  // If Kit hasn't finished rendering yet, retry a few times
  if (!rendered) {
    moveAttempts += 1;
    if (moveAttempts <= 30) {
      setTimeout(moveKitIntoModal, 150);
    }
    return;
  }

  // Move ALL rendered nodes (not just the script)
  while (hidden.firstChild) {
    mount.appendChild(hidden.firstChild);
  }

  kitMoved = true;
}

function openModal() {
  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  // Move the rendered Kit markup into the modal (waits if needed)
  moveKitIntoModal();
}

function closeModal() {
  overlay.classList.remove("open");
  overlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

openers.forEach((el) => el.addEventListener("click", openModal));
closers.forEach((el) => el.addEventListener("click", closeModal));

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && overlay.classList.contains("open")) closeModal();
});

// Footer year
document.getElementById("y").textContent = new Date().getFullYear();

// Modal logic
const overlay = document.getElementById("optinOverlay");
const openBtns = document.querySelectorAll("[data-open-optin]");
const closeBtns = document.querySelectorAll("[data-close-optin]");

const KIT_UID = "5fd5d63b2c";
const KIT_SRC = "https://tadrobert.kit.com/5fd5d63b2c/index.js";
let kitLoaded = false;

function loadKit() {
  if (kitLoaded) return;

  const mount = document.getElementById("kitFormMount");
  const script = document.createElement("script");
  script.async = true;
  script.setAttribute("data-uid", KIT_UID);
  script.src = KIT_SRC;

  mount.appendChild(script);
  kitLoaded = true;
}

function openModal(){
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
  requestAnimationFrame(loadKit);
}

function closeModal(){
  overlay.classList.remove("open");
  document.body.style.overflow = "";
}

openBtns.forEach(btn => btn.addEventListener("click", openModal));
closeBtns.forEach(btn => btn.addEventListener("click", closeModal));

overlay.addEventListener("click", e => {
  if (e.target === overlay) closeModal();
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

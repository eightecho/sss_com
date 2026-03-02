document.getElementById("y").textContent = new Date().getFullYear();

const overlay = document.getElementById("optinOverlay");
const openBtns = document.querySelectorAll("[data-open-optin]");
const closeBtns = document.querySelectorAll("[data-close-optin]");

let kitMoved = false;

function openModal(){
  overlay.classList.add("open");
  document.body.style.overflow="hidden";

  if(!kitMoved){
    const hidden = document.getElementById("kitHidden");
    const mount = document.getElementById("kitMount");
    mount.appendChild(hidden.firstElementChild);
    kitMoved = true;
  }
}

function closeModal(){
  overlay.classList.remove("open");
  document.body.style.overflow="";
}

openBtns.forEach(btn=>btn.addEventListener("click",openModal));
closeBtns.forEach(btn=>btn.addEventListener("click",closeModal));

overlay.addEventListener("click",e=>{
  if(e.target===overlay) closeModal();
});

document.addEventListener("keydown",e=>{
  if(e.key==="Escape") closeModal();
});

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
const textToAnimate = document.getElementById('textToAnimate');
const texts = ["Software Developer", "Frontend Developer"];
let currentIndex = 0;

function changeText() {
  textToAnimate.textContent = texts[currentIndex];
  currentIndex = (currentIndex + 1) % texts.length;
}

setInterval(changeText, 4000);
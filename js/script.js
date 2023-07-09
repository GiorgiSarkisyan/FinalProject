const hamburger = document.querySelector((".burger-bar"))
const navMenu = document.querySelector(".burger-nav")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})
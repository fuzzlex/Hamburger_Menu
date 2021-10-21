const menuicon = document.querySelector(".hamburger-menu");
const navbarEl = document.querySelector(".navbar")

menuicon.addEventListener("click" , () => {
    navbarEl.classList.toggle("change")

})
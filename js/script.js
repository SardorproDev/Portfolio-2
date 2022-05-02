"use strict";

const headerMenue__icon = document.querySelector(".header-menue__icon"),
    nav = document.querySelector("nav");

headerMenue__icon.addEventListener("click", () => {
    nav.classList.toggle("active");
    console.log("Salom");
})
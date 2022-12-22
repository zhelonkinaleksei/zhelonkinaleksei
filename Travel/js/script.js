'use strict'
const menuIcon = document.querySelector(".menu__icon");
if (menuIcon) {
   const sectionHi = document.querySelector(".section__hi");
   const headMenu = document.querySelector(".head__main ");
   menuIcon.addEventListener("click", function () {
      menuIcon.classList.toggle("_active");
      headMenu.classList.toggle("_actived");
      sectionHi.classList.toggle("_actives");
   });
}
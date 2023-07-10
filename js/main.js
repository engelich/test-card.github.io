
var swiper = new Swiper(".card__swiper-container", {
  fade: true,
  parallax: true,
  lazy: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".card__recommend-swiper", {
  fade: true,
  parallax: true,
  lazy: true,
  loop: true,
  breakpoints:{
    1130: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



const menuBtn = document.querySelector('.card__info-button');
const menuMobile = document.querySelector('.pop__up');
const scrolNone = document.querySelector('body');

menuBtn.addEventListener('click',()=>{
  menuMobile.classList.toggle('active');
  scrolNone.classList.toggle('modal__open');

});

const menuBt = document.querySelector('.pop__up-close');
const menuMobil = document.querySelector('.pop__up');
const scrolNonePop = document.querySelector('body');

menuBt.addEventListener('click',()=>{
  menuMobil.classList.toggle('active');
  scrolNonePop.classList.toggle('modal__open');
  
});





var mixer = mixitup('.card__information-inner', {
    load: {
        filter: '.one'
    }
});



 











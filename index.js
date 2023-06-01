var body = document.querySelector('.header');
window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  if (scrollPosition > 10) {
    body.classList.add('scrolled');
  } else {
    body.classList.remove('scrolled');
  }
});

const button = document.querySelector('.wrapper');
const menu = document.querySelector('.span');
button.addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('.navigation').classList.toggle('open');
})
;

let position = 0;
const slideToShow =3;
const slideToScroll =1;
const container = document.querySelector ('.slider-container');
const track =  document.querySelector ('.slider-track');
const item =  document.querySelector ('.ladders__block');
const btnNext =  document.querySelector ('.next');
const btnPrev =  document.querySelector ('.prew');
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

/*
const burger = document.querySelector('.navigation');
const nav = document.querySelector('.navigation');
burger.addEventListener('click', function() {
  this.classList.toggle('open');
})
;*/
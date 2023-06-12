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
});

$(document).ready(function() {
  let position = 0;
  const slidesToShow = 2;
  const slidesToScroll = 2;
  const carousel = $ ('.carousel');
  const track = $ ('.slider-track');
  const block = $ ('.ladders__block');
  const btnPrev = $ ('.prev');
  const btnNext = $ ('.next');
  const itemWidth = carousel.width() / slidesToShow;
  block.each(function (index, block) {
    $(block).css({
      minWidth: itemWidth,
    });
  })
});
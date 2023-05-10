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
const menu = document.querySelector('.wrapper');
menu.addEventListener('click', function() {
  button.classList.toggle('active');
});


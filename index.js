var body = document.querySelector('.header');
window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  if (scrollPosition > 10) {
    body.classList.add('scrolled');
  } else {
    body.classList.remove('scrolled');
  }
});


// Получаем ссылку на кнопку и меню
const toggle = document.querySelector('.wrapper');
const menu = document.querySelector('.logo__item');
// Добавляем обработчик события на клик по кнопке
button.addEventListener('click', function() {
  // Переключаем класс "active" у меню
  menu.classList.toggle('active');
});
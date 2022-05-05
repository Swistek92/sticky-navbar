const icon = document.querySelector('.menu-icon');
const menuElements = document.querySelectorAll('.navbar__item');

icon.addEventListener('click', () => {
  menuElements.forEach((e) => {
    e.classList.toggle('active');
  });
});

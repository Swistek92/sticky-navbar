const icon = document.querySelector('.menu-icon');
const menuElements = document.querySelectorAll('.navbar__item');

console.log('icon');
icon.addEventListener('click', () => {
  menuElements.forEach((e) => {
    e.classList.toggle('active');
  });
});

const menu = document.querySelector('#menu');
const navbar = document.querySelector('.navlinks');
const logo = document.querySelector('.desktoplogo');
const desktopnav = document.querySelector('.desktopnav');
const cc = document.querySelector('.cc');

menu.addEventListener('click', () => {
  logo.classList.toggle('off');
  navbar.classList.toggle('active');
  desktopnav.classList.toggle('active');
  menu.classList.toggle('fa-times');
  cc.classList.remove('cc');
});

navbar.addEventListener('click', () => {
  logo.classList.remove('off');
  navbar.classList.remove('active');
  menu.classList.remove('fa-times');
  cc.classList.add('cc');
});

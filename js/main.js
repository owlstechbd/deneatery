document.addEventListener('DOMContentLoaded', function() {
  window.onscroll = function() {
    var navbar = document.querySelector('.nav-main');
    if (window.pageYOffset > 50) { 
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  };
});


const mobileMenu = document.querySelector('#mobile-menu');
const navList = document.querySelector('#nav-list');
const closeMenu = document.querySelector('.close-button');

mobileMenu.addEventListener('click', () => {
  navList.classList.add('active');
  closeMenu.classList.add('active'); // Show the close button
});

closeMenu.addEventListener('click', () => {
  navList.classList.remove('active');
  closeMenu.classList.remove('active'); // Hide the close button
});

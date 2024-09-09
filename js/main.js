const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const header = document.getElementById('header');

let lastScrollTop = 0;

// Toggle menu visibility on mobile
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Sticky header on scroll
window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // If the user scrolls up, and they are past the hero section, make the header sticky
  if (scrollTop < lastScrollTop && scrollTop > 300) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }

  // Update the last scroll position
  lastScrollTop = scrollTop;
});

window.onscroll = function() {
  var navbar = document.querySelector('.nav-main');
  if (window.pageYOffset > 50) { // You can adjust the scroll distance here
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
};
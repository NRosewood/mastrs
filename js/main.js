const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.slider-dots',
    bulletActiveClass: 'active',
    bulletClass: 'slider-dot',
    clickable: true
  }
});

/* password control */

const passwordField = document.getElementById('password');
const passwordCheckButton = document.querySelector('.password-control');

if (passwordField && passwordCheckButton) {
  passwordCheckButton.addEventListener('click', (e) => {
    e.preventDefault();
  
    if (passwordField.getAttribute('type') === 'password') {
      passwordField.setAttribute('type', 'text');
    } else {
      passwordField.setAttribute('type', 'password')
    }
  
  })
}
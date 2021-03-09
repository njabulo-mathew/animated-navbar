const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.main-menu');

menuBtn.addEventListener('click', function() {
    navLinks.classList.toggle('show');
})

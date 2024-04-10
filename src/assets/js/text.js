const menuToggleButton = document.querySelectorAll('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggleButton.forEach(button => {
    button.addEventListener('click', toggleMenu);
});

function toggleMenu() {
    menu.classList.toggle('hidden')
}
let header = document.getElementsByClassName('header')[0];
let footer = document.getElementsByClassName('footer')[0];
let landing = document.getElementsByClassName('landing')[0];

function setLandingHeight() {
    landing.style.height = (window.innerHeight - (header.offsetHeight + footer.offsetHeight)) / 10 + 'rem';
}
setLandingHeight();

window.addEventListener('resize', setLandingHeight);
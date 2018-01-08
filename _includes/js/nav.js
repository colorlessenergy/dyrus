var navMenu = document.querySelector('#nav-toggle');
var menuOverlay = document.querySelector('.mobilemenu__overlay');

navMenu.addEventListener('click', function () {

    let iconMenu = document.querySelector('#icon-hamburger');
    iconMenu.classList.toggle('rect');

    let slideAnimation = document.querySelector('.mobilemenu')
    slideAnimation.classList.toggle('mobilemenu--animation');
    

    menuOverlay.classList.toggle('mobilemenu__overlay--animation');
    console.log(slideAnimation)
})
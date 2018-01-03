var navMenu = document.querySelector('#nav-toggle');


navMenu.addEventListener('click', function () {

    let iconMenu = document.querySelector('#icon-hamburger');
    iconMenu.classList.toggle('rect');

    let slideAnimation = document.querySelector('.mobilemenu')
    slideAnimation.classList.toggle('mobilemenu--animation');
    
    console.log(slideAnimation)
})
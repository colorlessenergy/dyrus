var navMenu = document.querySelector('#nav-toggle');


navMenu.addEventListener('click', function () {
    let slideAnimation = document.querySelector(".mobilemenu")
    slideAnimation.classList.toggle("mobilemenu--animation");
    
    console.log(slideAnimation)
})
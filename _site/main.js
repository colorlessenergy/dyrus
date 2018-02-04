var navMenu = document.querySelector('#nav-toggle');
var menuOverlay = document.querySelector('.mobilemenu__overlay');

navMenu.addEventListener('click', function () {

    let iconMenu = document.querySelector('#icon-hamburger');
    iconMenu.classList.toggle('rect');

    let slideAnimation = document.querySelector('.mobilemenu')
    slideAnimation.classList.toggle('mobilemenu--animation');
    

    menuOverlay.classList.toggle('mobilemenu__overlay--animation');
    console.log(slideAnimation)
});

// a carousel using owljs

$(document).ready(function ( ) {
  // first carousel
  var owl = $(".owl-carousel.first");
  var autoplayTime = 6500;
  var enterAnimation;
  var exitAnimation;
  owl.owlCarousel({
      items:1,
      loop:true,
      autoplay:true,
      autoplayTimeout: autoplayTime,
      mouseDrag: false,
      touchDrag: false,
    });
  
  // this fixs the width being to small on the carousel
  owlFixWidth(owl)
  
  // Fired before current slide change out

  firstCarousel(owl);

  owl.on("resized.owl.carousel", function () {
    window.clearTimeout(enterAnimation);
    window.clearTimeout(exitAnimation);

    owl.trigger('stop.owl.autoplay')

    owl.trigger('play.owl.autoplay', [6500])


    firstCarousel(owl);
  })


    // the second owl carousel which is in the showcase gallery
    var owl2 = $('.owl-carousel.second');

    owl2.owlCarousel({
      items:1,
      autoplay:true,
      nav: true,
      dotsContainer: '#customDots',
      navContainer: '#customNav',
      navText : ["",""],
      autoplayTimeout: autoplayTime,
      mouseDrag: false,
      touchDrag: false
    });

    // fix the width from being a bit to small in the carousel
    owlFixWidth(owl2)

    // make the arrow key in the second carousel move both portions of the
    // carousel (text, picture)
    $('#owlNext').click(function() {
      owl2.trigger("next.owl.carousel");
    });

});


function owlFixWidth(owl) {
  owl.trigger('refresh.owl.carousel');
}

function firstCarousel (owl) {
  owl.on('change.owl.carousel', function (event) {

    // remove the manually added classes

    $(".caption").removeClass('animation-enter-yellow');
    $(".special").removeClass('animation-enter-gray');
  });

  // Fired after current slide has been changed in
  owl.on('changed.owl.carousel', function (event) {

    // need this timeout for the first run since the class is manually added.
    enterAnimation = setTimeout(function () {
      $(".caption").addClass('animation-enter-yellow');
      $(".special").addClass('animation-enter-gray');
    }, 10)

    // removes the classes 100 ms before slide has been changed

    exitAnimation = setTimeout(function () {
      $(".caption").removeClass('animation-enter-yellow');
      $(".special").removeClass('animation-enter-gray');
    }, 6500 - 60)

  });
}
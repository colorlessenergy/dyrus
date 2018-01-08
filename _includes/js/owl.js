$(document).ready(function ( ) {
  var owl = $(".owl-carousel")
  var autoplayTime = 6500;
  var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
  
  owl.owlCarousel({
      items:1,
      loop:true,
      autoplay:true,
      autoplayTimeout: autoplayTime,
    });
  
    // this fixs the width being to small on the carousel
  owl.trigger('refresh.owl.carousel');
  
  // Fired before current slide change out
    owl.on('change.owl.carousel', function(event) {
  
      // remove the manually added classes
  
      $(".caption").removeClass('animation-enter-yellow');
      $(".special").removeClass('animation-enter-gray');
    });
  
  // Fired after current slide has been changed in
    owl.on('changed.owl.carousel', function(event) {
      // $(".caption").eq(event.item.index).addClass('animation-enter-yellow');
      // $(".special").eq(event.item.index).addClass('animation-enter-gray');
  
      // need this timeout for the first run since the class is manually added.
      setTimeout(function () {
        $(".caption").addClass('animation-enter-yellow');
        $(".special").addClass('animation-enter-gray');
      }, 10)
  
      // removes the classes 100 ms before slide has been changed
  
      setTimeout(function () {
        $(".caption").removeClass('animation-enter-yellow');
        $(".special").removeClass('animation-enter-gray');
      }, autoplayTime - 100)
  
    });
  

});

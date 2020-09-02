$(document).ready(function(){

/*Sticky navigation by Waypoints-: Waypoints is the easiest way to trigger a function when you scroll to an element.-------------------------------------------------- */
$('.JS-SECTION-FEATURES').waypoint(function(direction){
    if(direction == "down"){
        $('nav').addClass('STICKY-NAVI');
    }else{
        $('nav').removeClass('STICKY-NAVI');
    }
}, {
  offset: '60px;'
});


/* SCROLL on Button--------------------------------------------------------------------------------------------------------------------------------------------------- */
$('.JS-SCROLL-S6').click(function(){
    //in order to make the animated scroll, we need to select HTML and body. 
  $('html, body').animate({scrollTop: $('.JS-S6').offset().top}, 1000);
})

$('.JS-SCROLL-S1').click(function(){
  $('html, body').animate({scrollTop: $('.JS-SECTION-FEATURES').offset().top}, 1000);
})


/* Navigation Scroll-------------------------------------------------------------------------------------------------------------------------------------------------- */
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


  /* Animations on scroll:------------------------------------------------------------------------------------------------------------------------------------------- */
  $('.js--wp-1').waypoint(function() {
    $('.js--wp-1').addClass('animated fadeIn');
}, {
    offset: '80%'
});

$('.js--wp-2').waypoint(function() {
    $('.js--wp-2').addClass('animated fadeInUp');
}, {
    offset: '60%'
});

$('.js--wp-4').waypoint(function() {
    $('.js--wp-4').addClass('animated pulse');
}, {
    offset: '50%'
});

/* Mobile navigation:------------------------------------------------------------------------------------------------------------------------------------------------ */
 
 $('.JS-MOBILE-NAV-ICON').click(function(){
  var nav = $('.JS-MAIN-NAV');
  var icon = $('.JS-MOBILE-NAV-ICON i');
  
  nav.slideToggle(200);

  if(icon.hasClass('ion-navicon-round')){
    icon.addClass('ion-close-round');
    icon.removeClass('ion-navicon-round')
  }else{
    icon.addClass('ion-navicon-round')
    icon.removeClass('ion-close-round');
    


  }
 });








});








//wow animations
  	wow = new WOW({
			mobile: false
		});
		wow.init();


//navigation

var num = $(window).height() -100;

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.navbar-default').addClass('navbar-fixed-top');
        $('.navbar-default').removeClass('navbar-sticky');
    } else {
        $('.navbar-default').removeClass('navbar-fixed-top');
        $('.navbar-default').addClass('navbar-sticky');
    }
});
//navbar background

$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('.nav');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('.navbar .navbar-nav').css('background-color', 'rgba(65, 46, 46,0.8)'); 
       } else {
          $('.navbar .navbar-nav').css('background-color', 'transparent');
       }
   });
});

//smooth-scrolling
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


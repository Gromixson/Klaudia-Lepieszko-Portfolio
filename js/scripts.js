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
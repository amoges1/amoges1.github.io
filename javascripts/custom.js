
//nav transition state
$(window).scroll(function() {
  	if($(document).scrollTop() > 10) {
    	$('#nav').addClass('shrink');
      $('.navbar-brand').addClass('larger');
      $("#nav").addClass("navbar-inverse");
    }
    else {
    $('#nav').removeClass('shrink');
    $('.navbar-brand').removeClass('larger');
    $("#nav").removeClass("navbar-inverse");

    }
  });

//Scroll smooth animation
$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
    location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1500);
            return false;
        }
    }
});
//highlight active section
$(".nav li").on("click", function() {
     $(".nav li").removeClass("active");
     $(this).addClass("active");
   });

//Experience timeline objects
$(".accordion").accordion({
  header: ".timeline-heading",
  content: ".timeline-body",
  active:0,
  collapsible: true,
  icons: false,
  heightStyle: 'content'
});
//Close navbar after selecting section (small display)
$(function() {
    $('.nav a').on('click', function(){
        if($('.navbar-toggle').css('display') !='none'){
            $(".navbar-toggle").trigger( "click" );
        }
    });
});

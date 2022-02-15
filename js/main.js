$(document).ready(function(){
  $('.tesla_slider').slick({
    dots:true,
    arrows: false,
  	infinite:true,
  	autoplay: true,
	autoplaySpeed: 3000,
  	appendDots:('.slider_dots')
  });
  $('.counter').counterUp({
    delay: 10,
    time: 1000
});
});

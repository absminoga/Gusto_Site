
jQuery(document).ready(function(){
	$('.slider').slick({
	arrows: true,
	dots: false,
  slidesToShow: 3,
	slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        slidesToShow: 3,
				slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
				arrows: false,
        slidesToShow: 3,
				slidesToScroll: 1
      }
    },
		{
      breakpoint: 500,
      settings: {
				arrows: false,
        slidesToShow: 2,
				slidesToScroll: 1
      }
    }
  ]
});

$('.right_item_slider_slick').slick({
  dots: false,
	arrows: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});
});

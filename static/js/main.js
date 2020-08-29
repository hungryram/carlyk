// INITIALIZE LAX
window.onload = function() {
	lax.setup() // init

	const updateLax = () => {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

	window.requestAnimationFrame(updateLax)
}

// SLIDE HOME
jQuery(document).ready(function ($) {
    $('.home-slide').slick({
  dots: false,
  prevArrow:"<button type='button' class='slick-prev pull-left'>	&larr;	</button>",
  nextArrow:"<button type='button' class='slick-next pull-right'>&rarr;	</button>",

      pauseOnHover: false,
      infinite: true,
      speed: 500,
      fade: !0,
      cssEase: 'linear',
      slidesToShow: 1,
      //slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 10000,
      draggable: true,
      arrows: true,
      responsive: [
      {
      breakpoint: 1024,
      settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      
                }
      },
      {
      breakpoint: 768,
      settings: {
      draggable: true,
                }
      },
      {
      breakpoint: 600,
      settings: {
      slidesToShow: 1,
      draggable: true,
      slidesToScroll: 1
                }
      },
      {
      breakpoint: 480,
      settings: {
      slidesToShow: 1,
      draggable: true,
      slidesToScroll: 1
                }
      }
  
                ]
    });
});


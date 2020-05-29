

// ISOTOPE FILTER

jQuery(document).ready(function ($) {

	if ($('.iso-box-wrapper').length > 0) {

		var $container = $('.iso-box-wrapper'),
			$imgs = $('.iso-box img');



		$container.imagesLoaded(function () {

			$container.isotope({
				layoutMode: 'fitRows',
				itemSelector: '.iso-box'
			});

			$imgs.load(function () {
				$container.isotope('reLayout');
			})

		});

		//filter items on button click

		$('.filter-wrapper li a').click(function () {

			var $this = $(this), filterValue = $this.attr('data-filter');

			$container.isotope({
				filter: filterValue,
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false,
				}
			});

			// don't proceed if already selected 

			if ($this.hasClass('selected')) {
				return false;
			}

			var filter_wrapper = $this.closest('.filter-wrapper');
			filter_wrapper.find('.selected').removeClass('selected');
			$this.addClass('selected');

			return false;
		});

	}

});


// MAIN NAVIGATION

$('.main-navigation').onePageNav({
	scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
	scrollOffset: 75, //Height of Navigation Bar
	filter: ':not(.external)',
	changeHash: true
});

/* NAVIGATION VISIBLE ON SCROLL */
mainNav();
$(window).scroll(function () {
	mainNav();
});

function mainNav() {
	var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
	if (top > 40) $('.sticky-navigation').stop().animate({
		"opacity": '1',
		"top": '0'
	});
	else $('.sticky-navigation').stop().animate({
		"opacity": '0',
		"top": '-75'
	});
}


// HIDE MOBILE MENU AFTER CLIKING ON A LINK

$('.navbar-collapse a').click(function () {
	$(".navbar-collapse").collapse('hide');
});

// mybutton = document.getElementById("myBtn");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () { scrollFunction() };

// function scrollFunction() {
// 	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
// 		mybutton.style.display = "block";
// 	} else {
// 		mybutton.style.display = "none";
// 	}
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
// 	document.body.scrollTop = 0; // For Safari
// 	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }

$(document).ready(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 20) {
			$('#myBtn').fadeIn();
		} else {
			$('#myBtn').fadeOut();
		}
	});
	$(".owl-carousel").owlCarousel({
		autoplay: true,
		autoplayTimeout:3000, //Set AutoPlay to 3 seconds
		responsive : {
			0 : {
				items:3,
			},
			480 : {
				items:3,
			},
			768 : {
				items:7,
			},
			1024 : {
				items:8,
			},
		},
		nav: true,
		rewind:false,
		loop: true,
		navText:['prev','next'],
	});
	$('#myBtn').click(function () {
		$("html, body").animate({
			scrollTop: 0
		}, 1000);
		return false;
	});
});
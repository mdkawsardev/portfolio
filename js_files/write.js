var typed = new Typed('#element', {
	strings: ['Web Designer.', 'Web Developer.', 'Freelancer.'],
	typeSpeed: 50,
	backSpeed: 50,
	loop: true
});
var typed = new Typed('#coding', {
	strings: 
	["JavaScript Scripts <br> let developer = 'Md Kawsar'<br>let myportfolio = document.querySelector('.myportfolio')<br>let start = document.getElementById('#myrolls')<br> let myfunction = function(){<br>if (start === true) {<br>console.log(It's true) else {<br>console.lgo(It's false)<br>}<br>}<br>}<br>"],
	typeSpeed: 50,
	backSpeed: 100,
	loop: true
});
// AOS Animation codes 
AOS.init();
// Mixitup codes 
var myportfolio = document.querySelector('.myportfolio');
var mixer = mixitup(myportfolio);

$(document).ready(function () {
	$('.counter').counterUp({
		delay: 10,
		time: 2000
	});
	$('.loadMore').loadMoreResults({
		displayedItems: 2,
		showItems: 1,
	});

});

$(".owl-carousel").owlCarousel({
	loop: true,
	margin: 10,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
			nav: true
		},
		600: {
			items: 2,
			nav: false
		},
		1000: {
			items: 3,
			nav: true,
			loop: false
		}
	}
});
$(".demo").percircle();


// to Top plugin scripts 
(function ($) {
	"use strict";

	//Switch dark/light

	$(".switch").on('click', function () {
		if ($("body").hasClass("light")) {
			$("body").removeClass("light");
			$(".switch").removeClass("switched");
		}
		else {
			$("body").addClass("light");
			$(".switch").addClass("switched");
		}
	});

	$(document).ready(function () {
		"use strict";

		//Scroll back to top

		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);
		var offset = 50;
		var duration = 550;
		jQuery(window).on('scroll', function () {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});
		jQuery('.progress-wrap').on('click', function (event) {
			event.preventDefault();
			jQuery('html, body').animate({ scrollTop: 0 }, duration);
			return false;
		})
	});

})(jQuery);
// to Top plugin scripts 

(function ($) {
	"use strict";

    jQuery(document).ready(function($){

    	//---------Menu active js-----------
		  var path = window.location.pathname.split("/").pop();
		  
		  if ( path == '' ) {
		    path = 'index.html';
		  }
		      
		  var target = $('.header-menu-wrap li a[href="'+path+'"]');
		  target.addClass('active');

        //---------Menu responsive-----------
    	$('.header-menu-wrap').slicknav({
			prependTo:'.mobileSlickMenuActive',
			label: '',
			duration: 300
		});

		$(".slicknav_btn").on('click', function() {
		  if ( $(this).hasClass("slicknav_collapsed")) {
			$(".slicknav_icon").html('<i class="fa fa-bars"></i>');
		  } else {
			$(".slicknav_icon").html('<i class="fa fa-times"></i>');
		  }
		});

		$(".header-bottom-left-wrap").meanmenu({
			meanMenuClose: '<i class="fa fa-bars"></i>' +   ' All Categories '    + '<i class="fa fa-times"></i>',
			meanMenuOpen: '<i class="fa fa-bars"></i>' +   ' All Categories '    + '<i class="fa fa-angle-down"></i>', 
			meanMenuCloseSize: '14px',
			meanScreenWidth: '767', 
			meanExpandableChildren: true, 
			meanMenuContainer: '.mobileMenuActive', 
			onePage: true
		});

		$(window).bind('scroll', function() {
        	var navHeight = $(".header-support-part").height();
        	($(window).scrollTop() > navHeight) ? $('.header-bottom-area').addClass('goToTop') : $('.header-bottom-area').removeClass('goToTop');
    	});

    	//---------Mobile Search-----------
		$('.mobile-search').click(function(){
			$('.header-search-box.mobile').toggle();
		 });

		$("[data-toggle=tooltip]").tooltip();

		//------------App carousel------------
	    $(".logo-carousel").owlCarousel({
	        items: 6,
	        loop: true,
	        dots: false,
	        margin: 30,
	        stagePadding: 25,
	        autoplay: true,
	        smartSpeed: 1200,
	        nav: true,
	        navText: ["<i class='icofont-arrow-left'></i>", "<i class='icofont-arrow-right'></i>"],
	        responsiveClass: true,
	        responsive: {
	            0: {
	                items: 1,
	            },
	            480: {
	                items: 2,
	            },
	            768: {
	                items: 3,
	            },
	            992: {
	                items: 6
	            }
	        }
	    });

	    //---------CounterUp-----------
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });

       //  ---------testimonial Carousel-----------
	    $(".testimonial").owlCarousel({
	        items: 1,
	        loop: true,
	        nav: true,
	        dots: false,
			margin: 30,
			autoplay: true,
			navText: ["<i class='icofont-arrow-left'></i>", "<i class='icofont-arrow-right'></i>"],
			smartSpeed: 800
	    });

	    //------------Team carousel------------
	    $(".team-carousel").owlCarousel({
	        items: 2,
	        loop: true,
	        dots: true,
	        margin: 30,
	        stagePadding: 0,
	        autoplay: true,
	        smartSpeed: 1200,
	        nav: true,
	        navText: ["<i class='icofont-arrow-left'></i>", "<i class='icofont-arrow-right'></i>"],
	        responsiveClass: true,
	        responsive: {
	            0: {
	                items: 1,
	            },
	            480: {
	                items: 2,
	            },
	            768: {
	                items: 3,
	            },
	            992: {
	                items: 1,
	                stagePadding: 100,
	            },
	            1200: {
	                items: 2,
	                stagePadding: 100,
	            }
	        }
	    });


		//------------Website Scroll bottom to top------------
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('.scrollup').fadeIn();
				} else {
					$('.scrollup').fadeOut();
				}
			});

			$('.scrollup').click(function () {
				$("html, body").animate({
					scrollTop: 0
				}, 1000);
				return false;
			});


    });


    $(window).on('load', function() { 
    	$('.app-site-preloader-wrap').fadeOut(1000);
	})
	

}(jQuery));
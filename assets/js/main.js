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
		$('.search-close').click(function(){
			$('.header-search-box.mobile').hide();
		});

		//---------Tooltip-----------
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
	        navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
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

	    //------------App carousel------------
	    $(".product-carousel").owlCarousel({
	        items: 3,
	        loop: true,
	        dots: false,
	        margin: 10,
	        stagePadding: 0,
	        autoplay: true,
	        smartSpeed: 1200,
	        nav: true,
	        navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
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
	                items: 3
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

		//---------Product bootstrap slider-----------
		$("#ex2").slider({});


    });


    $(window).on('load', function() { 
    	$('.app-site-preloader-wrap').fadeOut(1000);
	})
	

}(jQuery));
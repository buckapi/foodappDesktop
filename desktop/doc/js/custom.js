/* =================================
===  OPEN SIDE NAV ==
=================================== */

/* $(document).ready(function () {
	$('#sidebarCollapse').on('click', function () {
		 $('#nevbarleft').toggleClass('active');
	});
}); */

/* Magnific Popup ============ */
 function MagnificPopup(){
	'use strict';	
	
	/* magnificPopup function */
	if(jQuery('.mfp-gallery').length)
	{
		jQuery('.mfp-gallery').magnificPopup({
			delegate: '.mfp-link',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function(item) {
					return item.el.attr('title') + '<small></small>';
				}
			}
		});	
	}	
	/* magnificPopup function end */
	
	/* magnificPopup for paly video function */		
	if(jQuery('.mfp-video').length)
	{
		jQuery('.mfp-video').magnificPopup({
			type: 'iframe',
			iframe: {
				markup: '<div class="mfp-iframe-scaler">'+
						 '<div class="mfp-close"></div>'+
						 '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
						 '<div class="mfp-title">Some caption</div>'+
						 '</div>'
			},
			callbacks: {
				markupParse: function(template, values, item) {
					values.title = item.el.attr('title');
				}
			}
		});	
	}
	
	/* magnificPopup for paly video function end*/
	if($('.popup-youtube, .popup-vimeo, .popup-gmaps').length)
	{
		$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,

			fixedContentPos: false
		});	
	}
	
}
function handleSupport(){
	var dzscript = '<script id="DZScript" src="https://dzassets.s3.amazonaws.com/w3-global.js?btn_dir=right"></script>';
	jQuery('body').append(dzscript);
}

$(document).ready(function () {
	MagnificPopup();
	handleSupport();
	 $('#sidebarCollapse').on('click', function () {
		 $('#nevbarleft').toggleClass('active');
		 $(this).toggleClass('active');
	 });
 });
/* =================================
===  DOWNLOAD BUTTON CLICK SCROLL ==
=================================== */
jQuery(function( $ ){
	$('#download-button, #download-button2, #download-button3, .topbutton').localScroll({
		duration:1000
	});
});
/* =================================
===  SMOOTH SCROLL             ====
=================================== */
var scrollAnimationTime = 1200,
    scrollAnimation = 'easeInOutExpo';
$('a.scrollto').bind('click.smoothscroll', function (event) {
    event.preventDefault();
    var target = this.hash;
    $('html, body').stop().animate({
        'scrollTop': $(target).offset().top
    }, scrollAnimationTime, scrollAnimation, function () {
        window.location.hash = target;
    });
});

// Add smooth scrolling to all links
	$(".navbar-nav a").on('click', function(event) {
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			});
		} // End if
	});

/* =================================
===  Bootstrap Internet Explorer 10 in Windows 8 and Windows Phone 8 FIX
=================================== */
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style')
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  )
  document.querySelector('head').appendChild(msViewportStyle)
}



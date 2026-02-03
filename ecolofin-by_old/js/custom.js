// JavaScript Document - Экология Финансов


	/*----------------------------------------------------*/
	/*	Preload Animation
	/*----------------------------------------------------*/

	$(window).load(function() {

		"use strict";

		$('#status').delay(100).fadeOut('fast');
		$('#preloader').delay(200).fadeOut('fast');
		$('body').delay(200).css({'overflow':'visible'});

	});


	/*----------------------------------------------------*/
	/*	Mobile Menu Toggle
	/*----------------------------------------------------*/
	$(document).ready(function() {

		"use strict";

		$('.navbar-nav li a').click(function() {
			$('#navigation-menu').css("height", "1px").removeClass("in").addClass("collapse");
			$('#navigation-menu').removeClass("open");
		});
	});


	/*----------------------------------------------------*/
	/*	OnScroll Animation
	/*----------------------------------------------------*/

	$(document).ready(function(){

		"use strict";

		$('.animated').css('opacity', '0');

		$('.triggerAnimation').waypoint(function() {
			var animation = $(this).attr('data-animate');
			$(this).css('opacity', '');
			$(this).addClass("animated " + animation);

		},
			{
				offset: '95%',
				triggerOnce: true
			}
		);

	});


	/*----------------------------------------------------*/
	/*	Parallax
	/*----------------------------------------------------*/

	$(window).bind('load', function() {

		"use strict";
		parallaxInit();

	});

	function parallaxInit() {
		$('#call_to_action').parallax("30%", 0.3);
		$('#video').parallax("30%", 0.3);
	}


	/*----------------------------------------------------*/
	/*	ScrollUp
	/*----------------------------------------------------*/
	/**
	* scrollUp v1.1.0
	* Author: Mark Goodyear - http://www.markgoodyear.com
	* Git: https://github.com/markgoodyear/scrollup
	*
	* Copyright 2013 Mark Goodyear
	* Licensed under the MIT license
	* http://www.opensource.org/licenses/mit-license.php
	*/

	$(document).ready(function(){

		'use strict';

		$.scrollUp = function (options) {

			// Defaults
			var defaults = {
				scrollName: 'scrollUp',
				topDistance: 600,
				topSpeed: 1200,
				animation: 'fade',
				animationInSpeed: 200,
				animationOutSpeed: 200,
				scrollText: '',
				scrollImg: false,
				activeOverlay: false
			};

			var o = $.extend({}, defaults, options),
				scrollId = '#' + o.scrollName;

			// Create element
			$('<a/>', {
				id: o.scrollName,
				href: '#top',
				title: o.scrollText
			}).appendTo('body');

			// If not using an image display text
			if (!o.scrollImg) {
				$(scrollId).text(o.scrollText);
			}

			// Minium CSS to make the magic happen
			$(scrollId).css({'display':'none','position': 'fixed','z-index': '2147483647'});

			// Active point overlay
			if (o.activeOverlay) {
				$("body").append("<div id='"+ o.scrollName +"-active'></div>");
				$(scrollId+"-active").css({ 'position': 'absolute', 'top': o.topDistance+'px', 'width': '100%', 'border-top': '1px dotted '+o.activeOverlay, 'z-index': '2147483647' });
			}

			// Scroll function
			$(window).scroll(function(){
				switch (o.animation) {
					case "fade":
						$( ($(window).scrollTop() > o.topDistance) ? $(scrollId).fadeIn(o.animationInSpeed) : $(scrollId).fadeOut(o.animationOutSpeed) );
						break;
					case "slide":
						$( ($(window).scrollTop() > o.topDistance) ? $(scrollId).slideDown(o.animationInSpeed) : $(scrollId).slideUp(o.animationOutSpeed) );
						break;
					default:
						$( ($(window).scrollTop() > o.topDistance) ? $(scrollId).show(0) : $(scrollId).hide(0) );
				}
			});

			// To the top
			$(scrollId).click( function(event) {
				$('html, body').animate({scrollTop:0}, o.topSpeed);
				event.preventDefault();
			});

		};

		$.scrollUp();

	});


	/*----------------------------------------------------*/
	/*	Testimonials Rotator
	/*----------------------------------------------------*/

	$(document).ready(function(){

		"use strict";

		$('.flexslider').flexslider({
			animation: "fade",
			controlNav: true,
			directionNav: false,
			slideshowSpeed: 4000,
			animationSpeed: 800,
			start: function(slider){
				$('body').removeClass('loading');
			}
		});

	});


	/*----------------------------------------------------*/
	/*	Animated Scroll To Anchor
	/*----------------------------------------------------*/

	$(document).ready(function(){

		"use strict";

		$.fn.scrollTo = function( options ) {

			var settings = {
				offset : -60,
				speed : 'slow',
				override : null,
				easing : null
			};

			if (options) {
				if(options.override){
					options.override = (override('#') != -1)? options.override:'#' + options.override;
				}
				$.extend( settings, options );
			}

			return this.each(function(i, el){
				$(el).click(function(e){
					var idToLookAt;
					if ($(el).attr('href').match(/#/) !== null) {
						e.preventDefault();
						idToLookAt = (settings.override)? settings.override:$(el).attr('href');
						if(history.pushState){
							history.pushState(null, null, idToLookAt);
							$('html,body').stop().animate({scrollTop: $(idToLookAt).offset().top + settings.offset}, settings.speed, settings.easing);
						}else{
							$('html,body').stop().animate({scrollTop: $(idToLookAt).offset().top + settings.offset}, settings.speed, settings.easing,function(e){
								window.location.hash = idToLookAt;
							});
						}
					}
				});
			});
		};

		$('#GoToHome, .go-to-features, #GoToAbout, #GoToTeam, #GoToPortfolio, #GoToPricing, #GoToFAQ').scrollTo({ speed: 1400 });

	});


	/*----------------------------------------------------*/
	/*	Current Menu Item
	/*----------------------------------------------------*/

	$(document).ready(function() {

		//Bootstraping variable
		var headerWrapper = parseInt($('#navigation-menu').height());
		var offsetTolerance = 250;

		//Detecting user's scroll
		$(window).scroll(function() {

			//Check scroll position
			var scrollPosition = parseInt($(this).scrollTop());

			//Move through each menu and check its position with scroll position
			$('.navbar-nav > li > a').each(function() {
				var thisHref = $(this).attr('href');
				if (thisHref && thisHref.charAt(0) === '#' && $(thisHref).length) {
					var thisTruePosition = parseInt($(thisHref).offset().top);
					var thisPosition = thisTruePosition - headerWrapper - offsetTolerance;

					if(scrollPosition >= thisPosition) {
						$('.selected-nav').removeClass('selected-nav');
						$('.navbar-nav > li > a[href='+ thisHref +']').addClass('selected-nav');
					}
				}
			});

			//If we're at the bottom of the page, move pointer to the last section
			var bottomPage = parseInt($(document).height()) - parseInt($(window).height());

			if(scrollPosition == bottomPage || scrollPosition >= bottomPage) {
				$('.selected-nav').removeClass('selected-nav');
				$('.navbar-nav > li > a:last').addClass('selected-nav');
			}
		});

	});


	/*----------------------------------------------------*/
	/*	Portfolio Lightbox
	/*----------------------------------------------------*/

	$(document).ready(function(){

		"use strict";

		$("a[class^='prettyPhoto']").prettyPhoto();

	});


	/*----------------------------------------------------*/
	/*	Clients Carousel
	/*----------------------------------------------------*/

	$(document).ready(function(){

		"use strict";

		$("#our-customers").owlCarousel({
			slideSpeed : 600,
			items : 6,
			itemsDesktop : [1199,5],
			itemsDesktopSmall : [960,4],
			itemsTablet: [768,3],
			itemsMobile : [480,2],
			navigation:true,
			pagination:false,
			navigationText : false,
			loop: true
		});

		// Carousel Navigation
		$(".next").click(function(){
			$("#our-customers").trigger('owl.next');
		});

		$(".prev").click(function(){
			$("#our-customers").trigger('owl.prev');
		});

	});


	/*----------------------------------------------------*/
	/*	Register Form Validation (Russian)
	/*----------------------------------------------------*/

	$(document).ready(function(){

		"use strict";

		$(".form_register form").validate({
			rules:{
				first_name:{
					required: true,
					minlength: 2,
					maxlength: 80
				},
				email:{
					required: true,
					email: true
				},
				phone:{
					required: true,
					minlength: 2
				}
			},
			messages:{
				first_name:{
					required: "Пожалуйста, укажите Ваше имя",
					minlength: "Имя должно содержать не менее 2 символов",
					maxlength: "Имя не должно превышать 80 символов"
				},
				email:{
					required: "Пожалуйста, укажите Ваш email",
					email: "Введите корректный email (например: name@domain.com)"
				},
				phone:{
					required: "Пожалуйста, заполните это поле",
					minlength: "Поле должно содержать не менее 2 символов"
				}
			}
		});

	});


	/*----------------------------------------------------*/
	/*	AJAX Form Submission (all contact forms)
	/*----------------------------------------------------*/

	$(document).ready(function(){

		"use strict";

		$('.form_register form').on('submit', function(e){
			var $form = $(this);

			// Skip if validation plugin is loaded and form is not valid
			if ($.fn.validate && !$form.valid()) {
				return false;
			}

			e.preventDefault();

			var $btn = $form.find('[type="submit"]');
			var originalText = $btn.val();
			$btn.val('Отправка...').prop('disabled', true);

			$.ajax({
				url: 'contact.php',
				type: 'POST',
				data: $form.serialize(),
				success: function(response) {
					$form.find('input[type="text"], input[type="email"], input[type="tel"]').val('');
					$btn.val('Отправлено!');

					// Show success message
					if (!$form.find('.form-success-msg').length) {
						$form.append('<p class="form-success-msg" style="color:#2ecc71; font-size:16px; margin-top:10px; font-weight:700;">Спасибо! Мы свяжемся с Вами!</p>');
					}

					// Close modal if inside one
					if ($form.closest('.modalDialog').length) {
						setTimeout(function(){
							window.location.hash = '#close';
						}, 2000);
					}

					setTimeout(function(){
						$btn.val(originalText).prop('disabled', false);
						$form.find('.form-success-msg').fadeOut(function(){ $(this).remove(); });
					}, 4000);
				},
				error: function() {
					$btn.val(originalText).prop('disabled', false);
					if (!$form.find('.form-error-msg').length) {
						$form.append('<p class="form-error-msg" style="color:#e74c3c; font-size:14px; margin-top:10px;">Ошибка отправки. Позвоните нам: 8 (029) 690-89-45</p>');
					}
					setTimeout(function(){
						$form.find('.form-error-msg').fadeOut(function(){ $(this).remove(); });
					}, 5000);
				}
			});
		});

	});


	/*----------------------------------------------------*/
	/*	Modal Tariff - pass tariff name to modal form
	/*----------------------------------------------------*/

	$(document).ready(function(){

		"use strict";

		$('a[href="#openModal"]').on('click', function(){
			var tariffName = '';
			var $pricingTable = $(this).closest('.pricing-table');
			if ($pricingTable.length) {
				tariffName = $pricingTable.find('.plan-title').text().trim();
			}
			$('#modal-tariff').val(tariffName);
		});

	});


	/*----------------------------------------------------*/
	/*	Newsletter Subscribe Form
	/*----------------------------------------------------*/

	$(document).ready(function() {

		"use strict";

		$('#newsletter_form').submit(function() {
			if (!valid_email_address($("#s_email").val()))
				{
					$(".message").html("<span style='color:red;'>Введённый email некорректен. Пожалуйста, введите правильный адрес.</span>");
				}
			else
				{
					$(".message").html("<span style='color:#19acca;'>Добавляем Ваш email...</span>");
						$.ajax({
						url: 'subscribe.php',
						data: $('#newsletter_form').serialize(),
						type: 'POST',
						success: function(msg) {
							if(msg=="success")
								{
									$("#s_email").val("");
									$(".message").html('<span style="color:#19acca;">Вы успешно подписались на рассылку.</span>');
								}
							else
								{
									$(".message").html("<span style='color:red;'>Ошибка подписки. Попробуйте ещё раз.</span>");
								}
						}
					});
				}

				return false;
		});

	});

	function valid_email_address(email) {
		var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
		return pattern.test(email);
	}

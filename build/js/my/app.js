//use strict mode;
'use strict';
(function(){
	var owlMain = $('[data-item="slider-main"]');
	owlMain.owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		dots:true,
		items:1,
		autoplayHoverPause: true,
		autoplayTimeout: 5000,
		autoplay:true,
		navText: [
		"<i class='my-arrow-left'></i>", 
		"<i class='my-arrow-right'></i>"
		],
		dots: true
	});
	var tabs = function(options) {

		var el = document.querySelector(options.el);
		var tabNavigationLinks = el.querySelectorAll(options.tabNavigationLinks);
		var tabContentContainers = el.querySelectorAll(options.tabContentContainers);
		var activeIndex = 0;
		var initCalled = false;


		var init = function() {
			if (!initCalled) {
				initCalled = true;
				el.classList.remove('no-js');

				for (var i = 0; i < tabNavigationLinks.length; i++) {
					var link = tabNavigationLinks[i];
					handleClick(link, i);
				}
			}
		};


		var handleClick = function(link, index) {
			link.addEventListener('mouseover', function(e) {
				e.preventDefault();
				goToTab(index);
			});
		};


		var goToTab = function(index) {
			if (index !== activeIndex && index >= 0 && index <= tabNavigationLinks.length) {
				tabNavigationLinks[activeIndex].classList.remove('is-active');
				tabNavigationLinks[index].classList.add('is-active');
				tabContentContainers[activeIndex].classList.remove('is-active');
				tabContentContainers[index].classList.add('is-active');
				activeIndex = index;
			}
		};


		return {
			init: init,
			goToTab: goToTab
		};
	};
	window.tabs = tabs;

	var myTabs = tabs({
		el: '#tabs',
		tabNavigationLinks: '.c-tabs-nav__link',
		tabContentContainers: '.c-tab'
	});
	myTabs.init();
	
	/*var news = $('[data-item="slider-news"]');
	news.owlCarousel({
		loop:true,
		margin:20,
		nav:true,
		dots:true,
		items:4,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			420:{
				items:3,
				nav:false
			},
			1000:{
				items:5,
				nav:true,
				loop:false
			}
		},
		autoplayHoverPause: true,
		autoplayTimeout: 5000,
		autoplay:true,
		navText: [
		"<i class='my-arrow-left'></i>",
		"<i class='my-arrow-right'></i>"
		],
		dots: true
	});*/
	
	$('[data-item="offcanvas-menu"]').click(function(event){
		$('html').toggleClass('nav-active');
		event.preventDefault();
	});
	$('.close-nav').click(function(event){
		$('html').toggleClass('nav-active');
		event.preventDefault();
	});
})();
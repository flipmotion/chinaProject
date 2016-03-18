//use strict mode;
'use strict';
(function(){
	var owlMain = $('[data-item="slider-main"]');
	owlMain.on('initialized.owl.carousel', function (e) {
		var carrentSlide = e.page.index;
		$('.inner-slider-title').removeClass('active');
		$('.inner-slider-title').each(function (carrentTarget) {
			if (carrentSlide == carrentTarget) {
				$(this).addClass('active');
			}
		});
	});
	
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

	owlMain.on('changed.owl.carousel', function (that) {
		var carrentSlide = that.page.index;
		$('.inner-slider-title').removeClass('active');
		$('.inner-slider-title').each(function (carrentTarget) {
			if (carrentSlide == carrentTarget) {
				$(this).addClass('active');
			}
		});
	});

	$('[data-nav="right"]').click(function() {
		owlMain.trigger('next.owl.carousel');
	});
	$('[data-nav="left"]').click(function() {
		owlMain.trigger('prev.owl.carousel');
	});
	var search = function(options) {
		var el = document.querySelector(options.el);
		var myTarget = document.querySelector(options.myTarget);
		var elClose = document.querySelector(options.elClose);

		var init = function() {
			el.addEventListener('click',function(e){
				e.preventDefault();
				myTarget.classList.toggle('is-active');
				el.classList.toggle('is-active');
			});
			elClose.addEventListener('click',function(e){
				e.preventDefault();
				myTarget.classList.toggle('is-active');
				el.classList.toggle('is-active');
			});
		};

		return {
			init: init
		};
	}
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
	window.search = search;
	var myTabs1 = tabs({
		el: '#tabs1',
		tabNavigationLinks: '.c-tabs-nav__link',
		tabContentContainers: '.c-tab'
	});
	var myTabs2 = tabs({
		el: '#tabs2',
		tabNavigationLinks: '.c-tabs-nav__link',
		tabContentContainers: '.c-tab'
	});
	var myTabs3 = tabs({
		el: '#tabs3',
		tabNavigationLinks: '.c-tabs-nav__link',
		tabContentContainers: '.c-tab'
	});
	var mySearch = search({
		el: '[data-item="btn-search"]',
		myTarget: '[data-item="search"',
		elClose: '[data-item="btn-close"]'
	});
	myTabs1.init();
	myTabs2.init();
	myTabs3.init();
	mySearch.init();

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
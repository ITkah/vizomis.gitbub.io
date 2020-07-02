$(document).ready(function() {

    $(function() {
        menu_top = 10; 
        $(window).scroll(function () {            
            if ($(window).scrollTop() > menu_top) {  
                $('header').addClass("fixed-desk");
            } else {                                 
                $('header').removeClass("fixed-desk");
            }
        });
    });

    $(".new-user").on("click", function(){
        $(".reg-form").slideUp(150);
        $(".inside-form").slideDown(150);
    });

    $(".old-user").on("click", function(){
        $(".inside-form").slideUp(150);
        $(".reg-form").slideDown(150);
    });

    $(".panel-bug-box").on("click", function(){
        $(".modal-item-slider").slick('reinit');
    });


    if($(document).width() > 576 ? true : false){
        console.log("desktop");
    } else {
        $(".data-title-box").on("click", function(){
            $(this).children(".data-title").toggleClass("arrow-rotate");
            $(this).next(".data-content-box").slideToggle(250);
        });
        $(".panel-title").on("click", function(){
            $(this).toggleClass("arrow-rotate");
            $(".panel-content").slideToggle(250);
        });
        $(".mob-change").on("click", function(){
            $(this).siblings(".hide-element").toggleClass("show-element");
        });
    }

    $(".data-change").on("click", function(){
        $(this).parent().siblings(".data-content-box").children(".hide-element").toggleClass("show-element");
    });

    $('.acc-head').on("click", function() {
        $('.acc-body').not($(this).next()).slideUp(200).siblings(".acc-head").removeClass("acc-head-active").parent().removeClass("active-body");
        $(this).toggleClass("acc-head-active").next().slideToggle(200).parent().toggleClass("active-body");
    });

    $(".show-about-text").on("click", function(){
        $(".home-text").toggleClass("max");
        $(this).siblings(".description").toggleClass("max");
        $(this).toggleClass("active-show");
    });

    $(".heart-box").on("click", function(){
        $(this).toggleClass("heart-click");
    });

    $(".header-lang-box").on("click", function(){
        $(this).toggleClass("active-lang");
        $(".lang-hide").slideToggle(50);
    });

    $(".search-call").on("click", function(){
        $(".header-search-box").toggleClass("active-drop"); 
        $("html,body").toggleClass("active-body");
    });

    $(".close-search").on("click", function(){
        $(".header-search-box").removeClass("active-drop");
        $("html,body").removeClass("active-body"); 
    });

    $(".call-nav").on("click", function(){
        $(".overflow").fadeToggle();
        $("nav").toggleClass("active-drop");
        $("html,body").toggleClass("active-body"); 
    });

    $(".call-filter").on("click", function(){
        $(".filter").toggleClass("filter-active");
    });

    $(".close-filter").on("click", function(){
        $(".filter").removeClass("filter-active");
    });

    $(".close-menu").on("click", function(){
        $(".overflow").hide();
        $("nav").removeClass("active-drop");
        $("html,body").removeClass("active-body"); 
    });

    $(".header-search-box input").on("click", function(){
        $(".result-search-wrap").fadeToggle(150);
    });

    $(".brend-name, .brend-xl").on("click", function(){
        $(this).siblings(".brend-hide-wrap").addClass("active-drop");
    });

    $(".brend-hide-panel").on("click", function(){
        $(".brend-hide-wrap").removeClass("active-drop");
    });

    $('.tabs__caption').on('click', 'p:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('.mobile-menu-nav').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

    $(".data").on("click", function(){
        $(this).siblings(".hide-arrow").hide();
        $(this).attr('type','date');
    });

    $(".time").on("click", function(){
        $(this).attr('type','time');
    });

    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
      

    $('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

});
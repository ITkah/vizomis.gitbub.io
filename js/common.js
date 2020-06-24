$(document).ready(function() {

    $(function() {
        menu_top = $('header').offset().top; 
        $(window).scroll(function () {            
            if ($(window).scrollTop() > menu_top) {  
                $('header').addClass("fixed-desk");
            } else {                                 
                $('header').removeClass("fixed-desk");
            }
        });
    });

    // if($(document).width() > 990 ? true : false){
    //     $(function() {
    //         menu_top = $('header').offset().top; 
    //         $(window).scroll(function () {            
    //             if ($(window).scrollTop() > menu_top) {  
    //                 $('header').addClass("fixed-desk");
    //             } else {                                 
    //                 $('header').removeClass("fixed-desk");
    //             }
    //         });
    //     });
    // } else {
    //     $(function() {
    //         menu_top = $('.header-container').offset().top; 
    //         $(window).scroll(function () {            
    //           if ($(window).scrollTop() > menu_top) {  
    //             if ($('.header-container').css('position') != 'fixed') { 
    //                 $('.header-container').css('position','fixed');  
    //                 $('.header-container').addClass("fixed-mob");
    //                 $('main').addClass("main-top"); 
    //             }
    //           } else {                                 
    //             if ($('.header-container').css('position') == 'fixed') {  
    //               $('.header-container').css('position','');
    //               $('.header-container').removeClass("fixed-mob");
    //               $('main').removeClass("main-top"); 
    //             }
    //           }
    //         });
    //     });  
    // }

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

    $('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

});
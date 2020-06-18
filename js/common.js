$(document).ready(function() {

    $(".show-about-text").on("click", function(){
        $(".home-text").toggleClass("max");
        $(this).toggleClass("active-show");
    });

    $(".heart-box").on("click", function(){
        $(this).toggleClass("heart-click");
    });

    $(".header-lang-box").on("click", function(){
        $(this).toggleClass("active-lang");
        $(".lang-hide").slideToggle(150);
    });

    $(".menu-desktop").on("click", function(){
        $(".menu-1").slideToggle(250);
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

});
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
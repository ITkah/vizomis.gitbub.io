$(".show-about-text").on("click", function(){
    $(".home-text").toggleClass("max");
    $(this).toggleClass("active-show");
});

$(".heart-box").on("click", function(){
    $(this).toggleClass("heart-click");
});
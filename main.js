$(window).on("load", function() {
    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    });

    $('.carrousel').slick({
        autoplay:true,
        arrows:false,
    });
});
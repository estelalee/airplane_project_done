$(document).ready(function () {
    $('.carousel').slick({
        arrows: false,
        autoplay: true,
        fade: false,
        autoplaySpeed: 3000,
        speed: 500,
    });
});

$('.explore__slide').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    autoplay: false,
});


$('.insrtuction__container').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
});
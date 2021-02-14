// add menu mobile
$('.header_menu').click(function() {
        $('.header_menu ul').toggleClass('active')
    })
    // add class js no html
document.documentElement.classList.add("js");

// inicia o banner rotativo
new SimpleSlide({
    slide: 'quote',
    nav: 'true',
    time: 5000,
    passeOnHover: true,
});
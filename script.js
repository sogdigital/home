$(document).ready(function(){
    // Inicializa o carrossel apenas em dispositivos móveis
    if($(window).width() < 768){ // Se a largura da tela for menor que 768px (dispositivos móveis)
        $('.especialidades-mobile-carousel .flex-carousel').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            swipe: true
        });
    }
});

window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 10) { // Quando a posição de rolagem for maior que 10 pixels
        header.style.backgroundColor = '#f64927'; // Altera o fundo do header para branco
    } else {
        header.style.backgroundColor = 'transparent'; // Mantém o fundo do header transparente
    }
});


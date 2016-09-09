jQuery(document).ready(function ($) {


// slide auto

      setInterval(function () {
          moveRight();
      }, 3000);

    var slideCount = $('#slideshow ul li').length;  // Création d'une variable pour le nombre de
    var slideWidth = $('#slideshow ul li').width();
    var slideHeight = $('#slideshow ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('#slideshow').css({
        width: slideWidth,
        height: slideHeight
    });

    $('#slideshow ul').css({
        width: sliderUlWidth,
        marginLeft: -slideWidth
    });

    $('#slideshow ul li:last-child').prependTo('#slideshow ul');


// fonction pour tourner vers la gauche

    function moveLeft() {
        $('#slideshow ul').animate({
            left: +slideWidth
        }, 200, function() {
            $('#slideshow ul li:last-child').prependTo('#slideshow ul');
            $('#slideshow ul').css('left', '');
        });
    };


// vers la droite

    function moveRight() {
        $('#slideshow ul').animate({
            left: -slideWidth
        }, 200, function() {
            $('#slideshow ul li:first-child').appendTo('#slideshow ul');
            $('#slideshow ul').css('left', '');
        });
    };


// Appel des fonctions

    $('a.control_prev').click(function() {
        moveLeft();
    });

    $('a.control_next').click(function() {
        moveRight();
    });

});

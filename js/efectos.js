$(document).ready (function(){

        var acercaDe = $('#acercade').offset().top,
            trabajos = $('#trabajos').offset().top,
            contacto = $('#contacto').offset().top;
    
        $('#btn-acercade').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop:  acercaDe
            }, 400);
        });
    
        $('#btn-trabajos').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: trabajos
            }, 400);
        });
    
        $('#btn-contacto').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: contacto
            }, 500);
        });
    });
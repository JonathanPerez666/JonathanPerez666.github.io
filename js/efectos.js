$(document).ready (function(){

        var acercaDe = $('#acercade').offset().top,
            trabajos = $('#trabajos').offset().top,
            contacto = $('#contacto').offset().top;
    
        $('#btn-acercade').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop:  acercaDe - 100
            }, 500);
        });
    
        $('#btn-trabajos').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: trabajos
            }, 500);
        });
    
        $('#btn-contacto').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: contacto
            }, 500);
        });
    });
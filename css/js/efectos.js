$(document).ready (function(){
    
        var acercaDe = $('#acerca-de').offset().top,
            menu = $('#platillos').offset().top,
            galeria = $('#galeria').offset().top,
            ubicacion = $('#ubicacion').offset().top;
    
        $('#btn-acerca-de').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop:  acercaDe - 100
            }, 500);
        });
    
        $('#btn-menu').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: menu
            }, 500);
        });
    
        $('#btn-galeria').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: galeria
            }, 500);
        });
    
        $('#btn-ubicacion').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: ubicacion
            }, 500);
        });
    
    });
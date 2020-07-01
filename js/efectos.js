$(document).ready (function(){

        var acercaDe = $('#acerca--de').offset().top,
            trabajos = $('#trabajoss').offset().top,
            contacto = $('#contactos').offset().top;
    
        $('#btn-acerca--de').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop:  acercaDe - 100
            }, 500);
        });
    
        $('#btn-trabajoss').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: trabajoss
            }, 500);
        });
    
        $('#btn-contactos').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: contactos
            }, 500);
        });
    });
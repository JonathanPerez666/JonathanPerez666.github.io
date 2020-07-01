$(document).ready (function(){
    
        var acercaDe = $('#acerca-de').offset().top,
            trabajoss = $('#trabajoss').offset().top,
            contacto = $('#contacto').offset().top;
    
        $('#btn-acerca-de').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: acercaDe
            }, 500);
        });
    
        $('#btn-trabajoss').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: trabajoss
            }, 500);
        });
    
        $('#btn-contacto').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: contacto
            }, 500);
        });
    });
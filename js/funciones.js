// Cuando el documento este listo
$(document).ready(function() {
    $("#owl-example").owlCarousel({
        items: 1
    });
    $('.materialboxed').materialbox();
    $('.boton_buscar').unbind('click').click(function(){
        $('#modal1').openModal();
    });
    $('.boton_login').unbind('click').click(function(){
        $('#modal2').openModal();
    });
});
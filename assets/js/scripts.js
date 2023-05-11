$('#selectUno').on('change', function () {
    var selectValor = $(this).val();
    if (selectValor == '1') {
        $('#origen').text('Chicago');
        $('#selectDos option[value="'+1+'"]').attr("disabled", true);
        $('#selectDos option[value="'+2+'"]').attr("disabled", false);
        $('#selectDos option[value="'+3+'"]').attr("disabled", false);
        $('#selectDos option[value="'+4+'"]').attr("disabled", false);
    } else if (selectValor == '2') {
        $('#origen').text('Boston');
        $('#selectDos option[value="'+2+'"]').attr("disabled", true);
        $('#selectDos option[value="'+1+'"]').attr("disabled", false);
        $('#selectDos option[value="'+3+'"]').attr("disabled", false);
        $('#selectDos option[value="'+4+'"]').attr("disabled", false);
    } else if (selectValor == '3') {
        $('#origen').text('Venecia');
        $('#selectDos option[value="'+3+'"]').attr("disabled", true);
        $('#selectDos option[value="'+1+'"]').attr("disabled", false);
        $('#selectDos option[value="'+2+'"]').attr("disabled", false);
        $('#selectDos option[value="'+4+'"]').attr("disabled", false);
    } else if (selectValor == '4') {
        $('#origen').text('Paris');
        $('#selectDos option[value="'+4+'"]').attr("disabled", true);
        $('#selectDos option[value="'+3+'"]').attr("disabled", false);
        $('#selectDos option[value="'+2+'"]').attr("disabled", false);
        $('#selectDos option[value="'+1+'"]').attr("disabled", false);
    }
    $('#btnMasInfo1').show();
    validacionViaje();
});
$('#selectDos').on('change', function () {
    var selectValor = $(this).val();
    if (selectValor == '1') {
        $('#destino').text('Chicago');
        $('#selectUno option[value="'+1+'"]').attr("disabled", true);
        $('#selectUno option[value="'+2+'"]').attr("disabled", false);
        $('#selectUno option[value="'+3+'"]').attr("disabled", false);
        $('#selectUno option[value="'+4+'"]').attr("disabled", false);
    } else if (selectValor == '2') {
        $('#destino').text('Boston');
        $('#selectUno option[value="'+2+'"]').attr("disabled", true);
        $('#selectUno option[value="'+1+'"]').attr("disabled", false);
        $('#selectUno option[value="'+3+'"]').attr("disabled", false);
        $('#selectUno option[value="'+4+'"]').attr("disabled", false);
    } else if (selectValor == '3') {
        $('#destino').text('Venecia');
        $('#selectUno option[value="'+3+'"]').attr("disabled", true);
        $('#selectUno option[value="'+1+'"]').attr("disabled", false);
        $('#selectUno option[value="'+2+'"]').attr("disabled", false);
        $('#selectUno option[value="'+4+'"]').attr("disabled", false);
    } else if (selectValor == '4') {
        $('#destino').text('Paris');
        $('#selectUno option[value="'+4+'"]').attr("disabled", true);
        $('#selectUno option[value="'+3+'"]').attr("disabled", false);
        $('#selectUno option[value="'+2+'"]').attr("disabled", false);
        $('#selectUno option[value="'+1+'"]').attr("disabled", false);
    }
    $('#btnMasInfo2').show();
    validacionViaje();
});
$("#dateOrigen").change(function(){
    var valor = $(this).val();
    if(valor!=""){
        $("#fechaOrigen").text(valor);
    }
    $('#dateDestino').attr("min",valor);
});
$("#dateDestino").change(function(){
    var valor = $(this).val();
    if(valor!=""){
        $("#fechaDestino").text(valor);
    }
    $('#dateOrigen').attr("max",valor);
});

function validacionViaje(){
    var origen =  $('#origen').text();
    var destino = $('#destino').text();

    if(origen == 'Chicago' && destino =='Venecia' || origen == 'Boston' && destino =='Paris'){
        $("#parrafoEscala").text('¡Ojo! Tu vuelo tiene una escala.');
    }else{
        $("#parrafoEscala").text('¡Tu vuelo no tiene una escala!');
    }
}


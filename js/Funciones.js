$(document).on('click', '#btn-validar', ()=>{
    let rut=$('#txt-rut').val();
    console.log(rut)
    let RutValidador=new RutValidador(rut)

    if(RutValidador.esValido){
        $('#resultado').html(mostrarMensaje('success', `Rut valido ${RutValidador.formato()}`));
        return;
    }
    $('#resultado').html(mostrarMensaje('danger', 'Rut invalido'))
})

function mostrarMensaje(tipo, mensaje){
    return `
        <div class='alert alert-${tipo} mt-2'>
            Strong>${mensaje}</strong>
        </div>
    `;
}
const usuario = document.querySelector('#user');
const contrasenia = document.querySelector('#pass');


function validarCampos(){
    if(usuario.value == '' || contrasenia.value == ''){
        abrirAlertaError();
    } else {
        abrirAlertaExito();
    }
}

function abrirAlertaError() {
    Swal.fire({
            title: "Ocurrió algo!",
            text: "Hay campos sin completar.",
            icon: "error",
            showConfirmButton: false,
            timer: 3000,
            position: 'center'
          });
}

function abrirAlertaExito(){
    Swal.fire({
        title: "Login con exito",
        text: "Bienvenido.",
        icon: "success",
        showConfirmButton: false,
        timer: 3000,
        position: 'center'
        });
}


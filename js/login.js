function validateLogin(formulario) {
    //Valido los campos
    if (
        formulario['username'].value.length === 0 ||
        formulario['password'].value.length === 0) {
        alert('Debes llenar todos los campos para iniciar session!')
        return
    }

    //Comparas contra el local storage
    if (
        formulario['username'].value === UsuarioCorrecto &&
        formulario['password'].value === ClaveCorrecta
    ) {
        //Si es exitoso voy al Listar
        signIn();
        window.location.href = 'lista.html'
    } else {
        //Si no lo es entonces indico que hay un error
        alert('Usuario o Clave incorrectos')
        return
    }
}
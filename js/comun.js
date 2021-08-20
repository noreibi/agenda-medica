function IsLogged() {
    return localStorage.getItem('isLogged') === 'true'
}

function setIsLogged(value) {
    localStorage.setItem('isLogged', value)
}

function signOut() {
    setIsLogged('false')
}

function signIn() {
    setIsLogged('true')
}

function InitSampleUser() {
    localStorage.setItem('UsuarioCorrecto', 'admin')
    localStorage.setItem('ClaveCorrecta', '123456')
}

function SessionRedirect() {
    if (!IsLogged()) {
        window.location.href = 'login.html'
    }
}

document.addEventListener('DOMContentLoaded', () => {

    try {
        var salir = document.getElementById('exit')

        salir.addEventListener('click', e => {

            e.preventDefault();
            localStorage.setItem('isLogged', 'false')
            window.location.href = 'login.html'
        })
    } catch (error) {

    }

}, false);
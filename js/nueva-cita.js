function validateNuevaCita(formulario) {
    console.log(formulario['especialidad'].value)

    var especialidad = validateField(formulario, 'especialidad', 'Especialidad', 'Debe Seleccionar una especialidad')
    var medico = validateField(formulario, 'medicos', 'Selecciona un Medico', 'Debe Seleccionar un Medico')
    var fecha = validateField(formulario, 'fecha', '', 'Por favor indique una fecha para la cita')
    var hora = validateField(formulario, 'hora', '', 'Por favor indique una hora para la cita', 'fecha-label-error')
    var firstname = validateField(formulario, 'firstname', '', 'Debe ingresar el nombre del Paciente')
    var lastname = validateField(formulario, 'lastname', '', 'Debe ingresar el apellido del Paciente', 'firstname-label-error')
    var fechaNacimiento = validateField(formulario, 'fecha-nacimiento', '', 'Por favor indique la fecha de nacimiento')
    var localidad = validateField(formulario, 'localidad', '', 'Indique la localidad')
    var telefono = validateField(formulario, 'telefono', '', 'Por favor indique un telefono de contacto', 'localidad-label-error')
    var email = validateField(formulario, 'email', '', 'Por favor indique un email para contactarlo')

    if (
        especialidad || medico || fecha || hora || firstname ||
        lastname || fechaNacimiento || localidad || telefono || email
    ) {
        alert('Por favor verifique el Formulario')
        return
    }

    var citaNueva = createCitaObject(formulario)
    createCita(citaNueva)
    window.location.href = 'lista.html'
}


function validateField(formulario, id, equalTo, messageError, idLabelError) {
    if (
        formulario[id].value === equalTo
    ) {
        formulario[id].style = 'border: 1px solid red'
        document.getElementById(idLabelError ? idLabelError : id + '-label-error').innerHTML = messageError
        return true
    } else {
        formulario[id].style = ''
        document.getElementById(idLabelError ? idLabelError : id + '-label-error').innerHTML = ''
        return false
    }
}

function createCitaObject(formulario) {
    return {
        especialidad: formulario['especialidad'].value,
        medico: formulario['medicos'].value,
        fecha: formulario['fecha'].value,
        hora: formulario['hora'].value,
        firstname: formulario['firstname'].value,
        lastname: formulario['lastname'].value,
        fechaNacimiento: formulario['fecha-nacimiento'].value,
        localidad: formulario['localidad'].value,
        telefono: formulario['telefono'].value,
        email: formulario['email'].value,
        modoContacto: formulario['modoencontro'].value,
        estudiosPrevios: formulario['estudios-previos'].value,
        observacion: formulario['observacion'].value,
    }
}

function createCita(cita) {
    var citasString = localStorage.getItem('citas', '[]')
    var citasArray = JSON.parse(citasString) || []
    citasArray.push(cita)
    localStorage.setItem('citas', JSON.stringify(citasArray))
}
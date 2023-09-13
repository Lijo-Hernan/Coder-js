const arrayPaciente = [];
const turnoOtorgado = [];
const especialidades = [
    "Clinica Medica",
    "Ginecologia",
    "Traumatologia",
    "Cirugia General",
    "Urologia",
];
const dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
const horarios = [
    `8.00`,
    "8.30",
    "9.00",
    "9.30",
    "10.00",
    "10.30",
    "11.00",
    "11.30",
    "12.00",
];
const medicos = [
    {
        dr: "Dr. Bruno H",
        servicio: "Clinica Medica",
    },
    {
        dr: "Dra. Prado S.",
        servicio: "Ginecologia",
    },
    {
        dr: "Dra. Rozas S.",
        servicio: "Traumatologia",
    },
    {
        dr: "Dr. Gilardoni A.",
        servicio: "Cirugia General",
    },
    {
        dr: "Dr. Sassano A.",
        servicio: "Urologia",
    },
];

let formulario = document.getElementById("datosPaciente");

formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    nombrePaciente = document.getElementById("nombre").value;
    apellidoPaciente = document.getElementById("apellido").value;

    sessionStorage.setItem("nombre", nombrePaciente);
    sessionStorage.setItem("apellido", apellidoPaciente);

    agregarPaciente(nombrePaciente, apellidoPaciente);
});

function agregarPaciente(nombre, apellido) {
    const paciente1 = {
        nombre,
        apellido,
    };
    arrayPaciente.push(paciente1);
    turnoOtorgado.push(paciente1);
    mostrarEspecialidades();
}
let especialidadSeleccionada;

function mostrarEspecialidades() {
    if (arrayPaciente.length > 0) {
        let ulEspecialidad = document.getElementById("listaEspecialidad");
        let spanEspecialidad = document.getElementById("spanEspecialidad");

        spanEspecialidad.innerHTML = `Bienvenido ${nombrePaciente.toUpperCase()} ${apellidoPaciente.toUpperCase()} , seleccione una especialidad para la que necesite gestionar un turno<br><br>`;

        especialidades.forEach(function (especialidad, index) {
            let selectEspecialidad = document.createElement("input");
            selectEspecialidad.type = "radio";
            selectEspecialidad.id = `especialidad` +(index);
            selectEspecialidad.name = "especialidad";
            selectEspecialidad.value = `${especialidad}`;

            let label = document.createElement("label");
            label.setAttribute("for", "especialidad"+(index));
            label.textContent = especialidad;
            

            ulEspecialidad.appendChild(selectEspecialidad);
            ulEspecialidad.appendChild(label);
            ulEspecialidad.appendChild(document.createElement("br"));
        });

            let seleccion1 = document.querySelectorAll('input[type="radio"][name="especialidad"]');
            
            seleccion1.forEach(function (radio) {
                radio.addEventListener("change", function () {
                    if (radio.checked) {especialidadSeleccionada = radio.value;}
                    agregarEspecialidad(especialidadSeleccionada);
                });
            });
        }};


function agregarEspecialidad(especialidadSeleccionada) {
    especialidadSeleccionada = {
        especialidad: especialidadSeleccionada,
    };
    turnoOtorgado.push(especialidadSeleccionada);
    seleccionDia();
}

let diaSeleccionado

function seleccionDia() {
    if (especialidadSeleccionada != undefined) {
        let ulDia = document.getElementById("listaDias");

        let spanDia = document.getElementById("spanDia");
        spanDia.innerHTML = `Por favor seleccione un Dia disponible para su un turno en <br><br>`;

        dias.forEach(function (dia, index) {
            let selectDia = document.createElement("input");
            selectDia.type = "radio";
            selectDia.name = "dias";
            selectDia.id = "dias" + (index);
            selectDia.value = `${dia}`;

            let label = document.createElement("label");
            label.setAttribute("for", "dias"+(index));
            label.textContent = dia;

            ulDia.appendChild(selectDia);
            ulDia.appendChild(label);
            ulDia.appendChild(document.createElement("br"));
        });

        let seleccion2 = document.querySelectorAll('input[type="radio"][name="dias"]');
            
        seleccion2.forEach(function (radio) {
            radio.addEventListener("change", function () {
                if (radio.checked) {diaSeleccionado = radio.value;}
                agregarDia(diaSeleccionado);
            });
        });
    }
}

function agregarDia(diaSeleccionado) {
    diaSeleccionado = {
        dia: diaSeleccionado,
    };
    turnoOtorgado.push(diaSeleccionado);
    seleccionHora();
}



let horaSeleccionada

function seleccionHora() {
    if (diaSeleccionado != undefined) {
        let ulHora = document.getElementById("listaHorarios");

        let spanHora = document.getElementById("spanHora");
        spanHora.innerHTML = `Por favor seleccione un Horario disponible para su un turno en <br><br>`;

        horarios.forEach(function (hora, index) {
            let selectHora = document.createElement("input");
            selectHora.type = "radio";
            selectHora.name = "hora";
            selectHora.id = "horas" + (index);
            selectHora.value = `${hora}`;

            let label = document.createElement("label");
            label.setAttribute("for", "horas"+(index));
            label.textContent = hora;

            ulHora.appendChild(selectHora);
            ulHora.appendChild(label);
            ulHora.appendChild(document.createElement("br"));
        });

        let seleccion3 = document.querySelectorAll('input[type="radio"][name="hora"]');
            
        seleccion3.forEach(function (radio) {
            radio.addEventListener("change", function () {
                if (radio.checked) {horaSeleccionada = radio.value;}
                agregarHora(horaSeleccionada);
            });
        });
    }
}

function agregarHora(horaSeleccionada) {
    horaSeleccionada = {
        hora: horaSeleccionada,
    };
    turnoOtorgado.push(horaSeleccionada);
    turnoFinal();
}


//------------------------------------HASTA ACA TODO BIEN----------------------------//




function turnoFinal() {
    if (horaSeleccionada !=undefined) {

    let medicoFiltrado = medicos.filter(medicos => medicos.servicio === especialidadSeleccionada);

    let medico = medicoFiltrado.map(medicos => medicos.dr);

        let textoFinal = document.getElementById("turno");
    textoFinal.innerHTML= `${nombrePaciente.toUpperCase()} ${apellidoPaciente.toUpperCase()} su turno quedo agendado con ${medico} de ${especialidadSeleccionada} el dia ${diaSeleccionado} a las ${horaSeleccionada}`;
}};









// `${nombrePaciente.toUpperCase()} ${apellidoPaciente.toUpperCase()} su turno quedo agendado con ${medico} de ${especialidadSeleccionada} el dia ${diaSeleccionado} a las ${horaSeleccionada}`


/*
function consutlaDia (valor) {
    return (`Seleccione una opcion de su preferencia: \n\n${valor}`);
}

let listaEspecialidad = especialidades.map((el) => `${el.nombre}`).join("\n")
let listaDias = dias.map((el) =>`${el.dia}`).join("\n");
let listaHorarios = horarios.map((el) => `${el.hora} hs.`).join("\n");
let selectEspecialidad = prompt(`Bienvenido ${nombrePaciente} estas son nuestros servicios:\n\n${listaEspecialidad} \n\nSeleccione una especialidad:`).toUpperCase();

switch (selectEspecialidad) {
    case "CLINICA MEDICA":
        selectEspecialidad = "CLINICA MEDICA";
        selectDia = prompt(consutlaDia(listaDias)).toUpperCase();
        break;
    case "TRAUMATOLOGIA":
        selectEspecialidad = "TRAUMATOLOGIA"
        selectDia = prompt(consutlaDia(listaDias)).toUpperCase();
        break;
    case "GINECOLOGIA":
        selectEspecialidad = "GINECOLOGIA"
        selectDia = prompt(consutlaDia(listaDias)).toUpperCase();
        break;
    case "CIRUGIA GENERAL":
        selectEspecialidad = "CIRUGIA GENERAL"
        selectDia = prompt(consutlaDia(listaDias)).toUpperCase();
        break;
    case "UROLOGIA":
        selectEspecialidad = "UROLOGIA"
        selectDia = prompt(consutlaDia(listaDias)).toUpperCase();
        break;
    default:
        alert(`Lo lamento ${selectEspecialidad} no es una de nuestras especialidades disponibles. Para volver a empezar seleccione F5`);
        break;
};

const medicoFiltrado = medicos.filter(medicos => medicos.especialidad === selectEspecialidad);

const medico = medicoFiltrado.map(medicos => medicos.dr);

switch (selectDia) {
    case "LUNES":
        selectDia = "LUNES"
        selectHora = prompt(consutlaDia(listaHorarios)).toUpperCase();
        break;

    case "MARTES":
        selectDia = "MARTES"
        selectHora = prompt(consutlaDia(listaHorarios)).toUpperCase();
        break;

    case "MIERCOLES":
        selectDia = "MIERCOLES"
        selectHora = prompt(consutlaDia(listaHorarios)).toUpperCase();
        break;

    case "JUEVES":
        selectDia = "JUEVES"
        selectHora = prompt(consutlaDia(listaHorarios)).toUpperCase();
        break;

    case "VIERNES":
        selectDia = "VIERNES"
        selectHora = prompt(consutlaDia(listaHorarios)).toUpperCase();
        break;

    default:
        alert("Lo lamento debe seleccionar algun dia de la lista. Para volver a empezar seleccione F5")
        break;
}

const errorHorario = horarios.some(incluye => incluye.hora.includes(selectHora));

if  (errorHorario){
    tunroOtorgado()
} else {
    alert("Lo lamento debe seleccionar algun horario de la lista. Para volver a empezar seleccione F5")
}
*/

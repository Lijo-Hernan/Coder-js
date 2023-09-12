let arrayPaciente = []

let formulario = document.getElementById("datosPaciente");

formulario.addEventListener("submit", function (e) {
    e.preventDefault()

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
    mostrarEspecialidades()
}


const especialidades = ["Clinica Medica", "Ginecologia", "Traumatologia", "Cirugia General", "Urologia"]
const dias = ["Lunes", "Martes","Miercoles", "Jueves", "Viernes"]
const horarios = [`8.00`, "8.30", "9.00", "9.30", "10.00", "10.30", "11.00", "11.30", "12.00"]
const medicos = [
    {
        dr: "Dr. Bruno H",
        especialidad: "CLINICA MEDICA",
    },
    {
        dr: "Dra. Prado S.",
        especialidad: "GINECOLOGIA",
    },
    {
        dr: "Dra. Rozas S.",
        especialidad: "TRAUMATOLOGIA",
    },
    {
        dr: "Dr. Gilardoni A.",
        especialidad: "CIRUGIA GENERAL",
    },
    {
        dr: "Dr. Sassano A.",
        especialidad: "UROLOGIA",
    }
]

function mostrarEspecialidades () {

if (arrayPaciente.length > 0) {

let ulEspecialidad = document.getElementById("listaEspecialidad");

ulEspecialidad.innerHTML = "<h3>Seleccione una especialidad</h3><br>"

especialidades.forEach(function(especialidad,index) {
    let selectEspecialidad = document.createElement("input");
    selectEspecialidad.type= "radio";
    selectEspecialidad.name= "especialidad";
    selectEspecialidad.value= "especialidad" + (index + 1);

    let label = document.createElement("label");
    label.textContent= especialidad;

    ulEspecialidad.appendChild(selectEspecialidad);
    ulEspecialidad.appendChild(label);
    ulEspecialidad.appendChild(document.createElement("br"));
});
}}




/*
function tunroOtorgado() {
    alert(`${nombrePaciente} su turno quedo agendado con ${medico} de ${selectEspecialidad} el dia ${selectDia} a las ${selectHora}`);
};

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

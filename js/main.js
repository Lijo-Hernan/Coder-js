let nombrePaciente = prompt("Bienvenido a nuestro gestor de encuentros, por favor ingrese su Nombre para comenzar").toUpperCase();

const dias = [
    {
        dia: "Lunes",
        id: 1,
    },
    {
        dia: "Martes",
        id: 2,
    },
    {
        dia: "Miercoles",
        id: 3,
    },
    {
        dia: "Jueves",
        id: 4,
    },
    {
        dia: "Viernes",
        id: 5,
    },

]

const horarios = [
    {
        hora: `8.00`,
        id: 1,
    },
    {
        hora: "8.30",
        id: 2,
    },
    {
        hora: "9.00",
        id: 3,
    },
    {
        hora: "9.30",
        id: 4,
    },
    {
        hora: "10.00",
        id: 5,
    },
    {
        hora: "10.30",
        id: 6,
    },
    {
        hora: "11.00",
        id: 7,
    },
    {
        hora: "11.30",
        id: 8,
    },
    {
        hora: "12.00",
        id: 9,
    },
]

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

const especialidades = [
    {
        nombre: "Clinica Medica",
        id: 1,
    },
    {
        nombre: "Ginecologia",
        id: 2,
    },
    {
        nombre: "Traumatologia",
        id: 3,
    },
    {
        nombre: "Cirugia General",
        id: 4,
    },
    {
        nombre: "Urologia",
        id: 5,
    },
]

function tunroOtorgado() {
    alert(`${nombrePaciente} su turno quedo agendado con ${medico} de ${selectEspecialidad} el dia ${selectDia} a las ${selectHora}`);
};

let listaEspecialidad = especialidades.map((el) => `- ${el.nombre}`).join("\n")
let listaDias = dias.map((el) =>`- ${el.dia}`).join("\n");
let listaHorarios = horarios.map((el) => `- ${el.hora} hs.`).join("\n");
let selectEspecialidad = prompt(`Bienvenido ${nombrePaciente} estas son nuestros servicios:\n\n${listaEspecialidad} \n\nSeleccione una especialidad:`).toUpperCase();

switch (selectEspecialidad) {
    case "CLINICA MEDICA":
        selectEspecialidad = "CLINICA MEDICA"
        selectDia = prompt(`Seleccione un dia de su preferencia: \n\n${listaDias}`).toUpperCase();
        break;
    case "TRAUMATOLOGIA":
        selectEspecialidad = "TRAUMATOLOGIA"
        selectDia = prompt(`Seleccione un dia de su preferencia: \n\n${listaDias}`).toUpperCase();
        break;
    case "GINECOLOGIA":
        selectEspecialidad = "GINECOLOGIA"
        selectDia = prompt(`Seleccione un dia de su preferencia: \n\n${listaDias}`).toUpperCase();
        break;
    case "CIRUGIA GENERAL":
        selectEspecialidad = "CIRUGIA GENERAL"
        selectDia = prompt(`Seleccione un dia de su preferencia: \n\n${listaDias}`).toUpperCase();
        break;
    case "UROLOGIA":
        selectEspecialidad = "UROLOGIA"
        selectDia = prompt(`Seleccione un dia de su preferencia: \n\n${listaDias}`).toUpperCase();
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
        selectHora = prompt(`Seleccione un horario de su preferencia: \n\n${listaHorarios}`);
        break;

    case "MARTES":
        selectDia = "MARTES"
        selectHora = prompt(`Seleccione un horario de su preferencia: \n\n${listaHorarios}`);
        break;

    case "MIERCOLES":
        selectDia = "MIERCOLES"
        selectHora = prompt(`Seleccione un horario de su preferencia: \n\n${listaHorarios}`);
        break;

    case "JUEVES":
        selectDia = "JUEVES"
        selectHora = prompt(`Seleccione un horario de su preferencia: \n\n${listaHorarios}`);
        break;

    case "VIERNES":
        selectDia = "VIERNES"
        selectHora = prompt(`Seleccione un horario de su preferencia: \n\n${listaHorarios}`);
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


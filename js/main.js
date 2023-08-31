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
        hora: "8.00",
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
    alert(`${nombrePaciente} su turno quedo agendado con el ${medico} de ${selectEspecialidad} el dia ${selectDia} a las ${selectHora}`);
};

let listaEspecialidad = especialidades.map((el, index) => (index + 1) + ". " + el.nombre).join("\n")
let listadias = dias.map((el, index) => (index + 1) + "." + el.dia).join("\n");
let listahorarios = horarios.map((el) => el.hora + " hs.").join("\n");
let selectEspecialidad = prompt("Bienvenido " + nombrePaciente + " estas son nuestros servicios:\n\n" + listaEspecialidad + "\n\nSeleccione una especialidad:").toUpperCase();

switch (selectEspecialidad) {
    case "CLINICA MEDICA":
        selectEspecialidad = "CLINICA MEDICA"
        selectDia = prompt(`Seleccione un dia de su preferencia: \n\n${listadias}`).toUpperCase();
        break;
    case "TRAUMATOLOGIA":
        selectEspecialidad = "TRAUMATOLOGIA"
        selectDia = prompt(`Seleccione un dia de su preferencia: \n\n${listadias}`).toUpperCase();
        break;
    case "GINECOLOGIA":
        selectEspecialidad = "GINECOLOGIA"
        selectDia = prompt(`Seleccione un dia de su preferencia: \n\n${listadias}`).toUpperCase();
        break;
    case "CIRUGIA GENERAL":
        selectEspecialidad = "CIRUGIA GENERAL"
        selectDia = prompt(`Seleccione un dia de su preferencia: \n\n${listadias}`).toUpperCase();
        break;
    case "UROLOGIA":
        selectEspecialidad = "UROLOGIA"
        selectDia = prompt(`Seleccione un dia de su preferencia: \n\n${listadias}`).toUpperCase();
        break;
    default:
        alert("Lo lamento debe seleccionar una especialidad de la lista. Para volver a empezar seleccione F5");
        break;
};

// const medicolistado = medicos.find(medico=>medicos.especialidad === selectEspecialidad);

const medicoFiltrado = medicos.filter(profesional => medicos.especialidad === selectEspecialidad);

const medico = medicoFiltrado.map(profesional => medicos.dr);

switch (selectDia) {
    case "LUNES":
        selectDia = "LUNES"
        selectHora = prompt(`Seleccione un horario de su preferencia: \n\n${listahorarios}`);
        break;

    case "MARTES":
        selectDia = "MARTES"
        selectHora = prompt(`Seleccione un horario de su preferencia: \n\n${listahorarios}`);
        break;

    case "MIERCOLES":
        selectDia = "MIERCOLES"
        selectHora = prompt(`Seleccione un horario de su preferencia: \n\n${listahorarios}`);
        break;

    case "JUEVES":
        selectDia = "JUEVES"
        selectHora = prompt(`Seleccione un horario de su preferencia: \n\n${listahorarios}`);
        break;

    case "VIERNES":
        selectDia = "VIERNES"
        selectHora = prompt(`Seleccione un horario de su preferencia: \n\n${listahorarios}`);
        break;

    default:
        alert("Lo lamento debe seleccionar algun dia de la lista. Para volver a empezar seleccione F5")
        break;
}


if (listahorarios.includes(selectHora)) {
    tunroOtorgado()
} else {
    alert("Lo lamento debe seleccionar algun horario de la lista. Para volver a empezar seleccione F5")
}

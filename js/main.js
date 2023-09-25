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
        dr: " Dr. Bruno H.",
        servicio: "Clinica Medica",
    },
    {
        dr: " Dra. Prado S.",
        servicio: "Ginecologia",
    },
    {
        dr: " Dra. Rozas S.",
        servicio: "Traumatologia",
    },
    {
        dr: " Dr. Gilardoni A.",
        servicio: "Cirugia General",
    },
    {
        dr: " Dr. Sassano A.",
        servicio: "Urologia",
    },
];

let formulario = document.getElementById("datosPaciente");
let plantillaPcte = document.getElementById("spanSeparador")

let especialidadSeleccionada;
let diaSeleccionado;
let horaSeleccionada;
let fechaSinHorario;


formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    nombrePaciente = document.getElementById("nombre").value;
    apellidoPaciente = document.getElementById("apellido").value;

    sessionStorage.setItem("nombre", nombrePaciente);
    sessionStorage.setItem("apellido", apellidoPaciente);

    agregarPaciente(nombrePaciente, apellidoPaciente);
    tagPaciente();
});

function agregarPaciente(nombre, apellido) {
    const paciente1 = {
        nombre,
        apellido,
    };
    arrayPaciente.push(paciente1);
    turnoOtorgado.push(paciente1);
    let displayLista = document.getElementById("lista1");
    displayLista.style.display = "flex";
}

function tagPaciente() {
    plantillaPcte.innerHTML = `Bienvenindo ${nombrePaciente.toUpperCase()} ${apellidoPaciente.toUpperCase()}`;
    mostrarEspecialidades()
}

function mostrarEspecialidades() {
    if ((arrayPaciente.length > 0 && turnoOtorgado.length > 0)) {
        let ulEspecialidad = document.getElementById("listaEspecialidad");
        let spanEspecialidad = document.getElementById("spanEspecialidad");

        spanEspecialidad.innerHTML = `<span class="loader"></span>`;

        setTimeout(() => {
            spanEspecialidad.innerHTML = `Seleccione una especialidad para la que necesite gestionar un turno<br><br>`;
            especialidades.forEach(function (especialidad, index) {
                let selectEspecialidad = document.createElement("input");
                selectEspecialidad.type = "radio";
                selectEspecialidad.id = `especialidad` + index;
                selectEspecialidad.name = "especialidad";
                selectEspecialidad.value = `${especialidad}`;

                let label = document.createElement("label");
                label.setAttribute("for", "especialidad" + index);
                label.textContent = especialidad;

                ulEspecialidad.appendChild(selectEspecialidad);
                ulEspecialidad.appendChild(label);
                ulEspecialidad.appendChild(document.createElement("br"));
            });

            let seleccion1 = document.querySelectorAll(
                'input[type="radio"][name="especialidad"]'
            );

            seleccion1.forEach(function (radio) {
                radio.addEventListener("change", function () {
                    if (radio.checked) {
                        especialidadSeleccionada = radio.value;
                    }
                    agregarEspecialidad(especialidadSeleccionada);
                });
            });
        }, 1500);
        let displayLista = document.getElementById("datosPaciente");
        displayLista.style.display = "none";
    }
}

function agregarEspecialidad(especialidadSeleccionada) {
    especialidadSeleccionada = {
        especialidad: especialidadSeleccionada,
    };
    turnoOtorgado.push(especialidadSeleccionada);
    seleccionDia();
    let calendario = document.getElementById("calendarBox")
    calendario.style.display = "flex"


    Toastify({
        text: "Especialidad seleccionada",
        duration: 2000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right,  #fcd10c, #00b9f2)",
        },
        onClick: function () { }
    }).showToast();
}


function seleccionDia() {
    if (especialidadSeleccionada != undefined) {

        let displayEspecialidad = document.getElementById("listaEspecialidad");
        displayEspecialidad.style.display = "none";


    }
}

function agregarDia(fechaSinHorario) {
    diaSeleccionado = {
        fecha: fechaSinHorario
    }
    turnoOtorgado.push(diaSeleccionado);
    let displayHoras = document.getElementById("lista2");
    displayHoras.style.display = "flex";
    seleccionHora();

    Toastify({
        text: "Día seleccionado",
        duration: 1500,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #fcd10c, #00b9f2)",
        },
        onClick: function () { }
    }).showToast();
}


function seleccionHora() {
    if (turnoOtorgado.length == 3) {
        let ulHora = document.getElementById("listaHorarios");
        let spanHora = document.getElementById("spanHora");
        spanHora.innerHTML = `<span class="loader"></span>`

        setTimeout(() => {
            spanHora.innerHTML = `Por favor seleccione un Horario disponible para su un turno del día <strong>${fechaSinHorario}</strong> en <strong>${especialidadSeleccionada}</strong> <br><br>`;

            horarios.forEach(function (hora, index) {
                let selectHora = document.createElement("input");
                selectHora.type = "radio";
                selectHora.name = "hora";
                selectHora.id = "horas" + index;
                selectHora.value = `${hora}`;

                let label = document.createElement("label");
                label.setAttribute("for", "horas" + index);
                label.textContent = hora;

                ulHora.appendChild(selectHora);
                ulHora.appendChild(label);
                ulHora.appendChild(document.createElement("br"));
            });

            let seleccion3 = document.querySelectorAll(
                'input[type="radio"][name="hora"]'
            );

            seleccion3.forEach(function (radio) {
                radio.addEventListener("change", function () {
                    if (radio.checked) {
                        horaSeleccionada = radio.value;
                    }
                    agregarHora(horaSeleccionada);
                });
            });
        }, 1500);
        let displayDias = document.getElementById("calendarBox");
        displayDias.style.display = "none";
    }
}

function agregarHora(horaSeleccionada) {
    horaSeleccionada = {
        hora: horaSeleccionada,
    };
    turnoOtorgado.push(horaSeleccionada);

    let turnoAString = JSON.stringify(turnoOtorgado);
    sessionStorage.setItem("turnoStoreado", turnoAString);
    turnoFinal();

}

function turnoFinal() {
    if (sessionStorage.getItem("turnoStoreado")) {

        turnoRecuperado = JSON.parse(sessionStorage.getItem("turnoStoreado"))

        let medicoFiltrado = medicos.filter(
            (medicos) => medicos.servicio === turnoRecuperado[1].especialidad
        );

        let medico = medicoFiltrado.map((medicos) => medicos.dr);

        let textoFinal = document.getElementById("turno");
        textoFinal.innerHTML = `${nombrePaciente.toUpperCase()} ${apellidoPaciente.toUpperCase()}, su turno quedo agendado con: ${medico} de ${especialidadSeleccionada} el día ${fechaSinHorario} a las ${horaSeleccionada}hs.`;

        let displayHoras = document.getElementById("lista2");
        displayHoras.style.display = "none";
        let displayTurno = document.getElementById("turnoFinal")
        displayTurno.style.display = "flex"

        const boton = document.createElement("button");
        boton.textContent = "Solicitar nuevo turno";
        boton.id = "nuevoTurno";
        boton.className = "nuevoTurno submit btn btn-dark";

        boton.addEventListener('click', function () {
            window.location.href = "../index.html"
        });
        displayTurno.appendChild(boton);

    } else {
        window.location.href = "../index.html";
    }
}

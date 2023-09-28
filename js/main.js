const arrayPaciente = [];
const turnoOtorgado = {
  nombre: "",
  apellido: "",
  especialidad: "",
  medico: "",
  fecha: "",
  hora: "",
};
const variosTurnos = [];

let formulario = document.getElementById("datosPaciente");
let plantillaPcte = document.getElementById("spanSeparador");

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
    turnoOtorgado.nombre = nombre;
    turnoOtorgado.apellido = apellido;
}

function tagPaciente() {
    plantillaPcte.innerHTML = `Bienvenindo ${turnoOtorgado.nombre.toUpperCase()} ${turnoOtorgado.apellido.toUpperCase()}`;

    let displayLista = document.getElementById("lista1");
    displayLista.style.display = "flex";

    mostrarEspecialidades();
}

function mostrarEspecialidades() {
    if (turnoOtorgado.nombre != undefined && turnoOtorgado.apellido != undefined) {
        
    let ulEspecialidad = document.getElementById("listaEspecialidad");
    let spanEspecialidad = document.getElementById("spanEspecialidad");
    ulEspecialidad.innerHTML = "";

    spanEspecialidad.innerHTML = `<span class="loader"></span>`;

    setTimeout(() => {
        
        fetch(`../json/especialidades.json`)
        .then((response) => response.json())
        .then((data) => {
            
            spanEspecialidad.innerHTML = `Seleccione una especialidad para la que necesite gestionar un turno<br><br>`;
            let especialidades = data;
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
        }).catch(e=>error());
    }, 1500);

    let displayLista = document.getElementById("datosPaciente");
    displayLista.style.display = "none";
}
}

function error() {
    let displayHoras = document.getElementById("lista2");
    displayHoras.style.display = "none";
    let error = document.getElementById ("error")
    spanEspecialidad.innerHTML = ""
    spanHora.innerHTML=""
    error.style.display = "flex"
    error.innerHTML = `<img src="../multimedia/404.jpg">`
    document.append(error) 
}


function agregarEspecialidad(especialidadSeleccionada) {
    turnoOtorgado.especialidad = especialidadSeleccionada;
    seleccionDia();

    let loaderCal = document.getElementById("cajaLoader");
    loaderCal.style.display = "flex";

setTimeout(() => {
    loaderCal.style.display = "none";
    let calendario = document.getElementById("calendarBox");
    calendario.style.display = "flex";
    calendar.updateSize();
}, 1500);

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
    onClick: function () {},
    }).showToast();
}

function seleccionDia() {
    if (especialidadSeleccionada != undefined) {
    let displayEspecialidad = document.getElementById("lista1");
    displayEspecialidad.style.display = "none";
    }
}

function agregarDia() {
    turnoOtorgado.fecha = fechaSinHorario;

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
    onClick: function () {},
    }).showToast();
}

function seleccionHora() {
    let ulHora = document.getElementById("listaHorarios");
    let spanHora = document.getElementById("spanHora");
    ulHora.innerHTML = "";
    spanHora.innerHTML = `<span class="loader"></span>`;

    setTimeout(() => {
    spanHora.innerHTML = `Por favor seleccione un Horario disponible para su un turno del día <strong>${fechaSinHorario}</strong> en <strong>${especialidadSeleccionada}</strong> <br><br>`;

    fetch(`../json/horarios.json`)
    .then((response) => response.json())
    .then((data) => {
        let horarios = data;

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
    }).catch(e=>error());
}, 1500);
let displayDias = document.getElementById("calendarBox");
displayDias.style.display = "none";
}

function agregarHora(horaSeleccionada) {
    turnoOtorgado.hora = horaSeleccionada;

    let turnoAString = JSON.stringify(turnoOtorgado);
    sessionStorage.setItem("turnoStoreado", turnoAString);
    turnoFinal();
}

function turnoFinal() {
    if (sessionStorage.getItem("turnoStoreado")) {
    turnoRecuperado = JSON.parse(sessionStorage.getItem("turnoStoreado"));

    fetch(`../json/medicos.json`)
    .then((response) => response.json())
    .then((data) => {
        let medicos = data;

        let medicoFiltrado = medicos.filter(
        (medicos) => medicos.servicio === turnoRecuperado.especialidad
        );

        let medico = medicoFiltrado.map((medicos) => medicos.dr);

        turnoOtorgado.medico = medico[0];

        let textoFinal = document.getElementById("turno");
        textoFinal.innerHTML = `${nombrePaciente.toUpperCase()} ${apellidoPaciente.toUpperCase()}, su turno quedo agendado con: ${medico} de ${especialidadSeleccionada} el día ${fechaSinHorario} a las ${horaSeleccionada}hs.`;

        let displayHoras = document.getElementById("lista2");
        displayHoras.style.display = "none";
        let displayTurno = document.getElementById("turnoFinal");
        displayTurno.style.display = "flex";

        const nuevoTurno = { ...turnoOtorgado };
        variosTurnos.push(nuevoTurno);

        botonesDeTrunos();
    }).catch(e=>error()); ;
} else {
    window.location.href = "../index.html";
}
}

function botonesDeTrunos() {
    let botones = document.getElementById("botones");
    botones.innerHTML = "";

    const boton1 = document.createElement("button");
    boton1.textContent = "Solicitar nuevo turno";
    boton1.id = "nuevoTurno";
    boton1.className = "nuevoTurno submit btn btn-dark";
    boton1.onclick = volverArriba;

    const boton2 = document.createElement("button");
    boton2.textContent = "Ver los turnos reservados";
    boton2.id = "todosLosTurnos";
    boton2.className = "todosLosTurno submit btn btn-dark";
    boton2.onclick = mostrarTurnos;

    botones.appendChild(boton1);
    botones.appendChild(boton2);
}

function volverArriba() {
    let displayTurno = document.getElementById("turnoFinal");
    displayTurno.style.display = "none";

    tagPaciente();
}

function mostrarTurnos() {
    let contenedorCard = document.getElementById("turnosAgendados");

    variosTurnos.forEach(function (turno, index) {
    let card = document.createElement("div");
    card.className = "turno-card";
    card.textContent = `Turno ${index + 1}: en ${turno.especialidad} con ${
    turno.medico
    } el día ${turno.fecha} a ${turno.hora}`;

    contenedorCard.appendChild(card);

    let displayTurno = document.getElementById("turnoFinal");
    displayTurno.style.display = "none";
});
    let turnosTotales = JSON.stringify(variosTurnos);
    localStorage.setItem("turnoTotales", turnosTotales);
}

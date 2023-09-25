document.addEventListener('DOMContentLoaded', function() {

    let calendarEl = document.getElementById("calendar");

    let calendar = new FullCalendar.Calendar(calendarEl, {

        headerToolbar: {
            locale: 'es',
            today: 'Hoy'
        },

        firstDay: 1,
        selectable: true,
        locale: 'es',
        selectable: true,
        editable: false,
        events: [],

    });

    calendar.on('select', function (info) {
        let fechaSeleccionada = info.start;

        let dia = fechaSeleccionada.getDate();
        let mes = fechaSeleccionada.getMonth() + 1;
        let año = fechaSeleccionada.getFullYear();
        let diaDeLaSemanaNumero = fechaSeleccionada.getDay();

        let diasDeLaSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

        let nombreDelDia = diasDeLaSemana[diaDeLaSemanaNumero];

        fechaSinHorario = `${nombreDelDia} ${dia}/${mes}/${año}`;
        agregarDia()
    });

    calendar.render();
    calendar.updateSize();

});
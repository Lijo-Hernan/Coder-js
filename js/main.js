let nombrePaciente = prompt("Ingrese su nombre");
let selectEspecialidad = parseInt(prompt("Bienvenido " + nombrePaciente +" Seleccione una especialidad :\n\n1. Clinica medica\n2. Traumatologia\n3. Ginecologia\n4. Cirugia \n\nSeleccione usando el numero de lista"));
let selectDia 
let selectHora

function tunroOtorgado () {
    alert (nombrePaciente + " su turno quedo agendado con " +selectEspecialidad + " el dia " + selectDia + " a las " + selectHora );
    };
function error (){
    alert (nombrePaciente + " debe seleccionar el valor numerico de su seleccion de la lista, para volver a empezar oprima F5")
}

if (isNaN(selectEspecialidad)) {
    error();
} else {
while (selectEspecialidad <5){
switch (selectEspecialidad) {
    case 1:
        selectEspecialidad = "CLINICA MEDICA"
        selectDia = parseInt(prompt( "Seleccione un dia de su preferencia:\n1. Lunes \n2. Martes \n3. Miercoles \n4. Jueves \n5. Viernes"));
        break;
    case 2:
        selectEspecialidad = "TRAUMATOLOGIA"
        selectDia = parseInt(prompt( "Seleccione un dia de su preferencia:\n1. Lunes \n2. Martes \n3. Miercoles \n4. Jueves \n5. Viernes"));
        break;
    case 3:
        selectEspecialidad = "GINECOLOGIA"
        selectDia = parseInt(prompt( "Seleccione un dia de su preferencia:\n1. Lunes \n2. Martes \n3. Miercoles \n4. Jueves \n5. Viernes"));
        break;
    case 4:
        selectEspecialidad = "CIRUGIA"
        selectDia = parseInt(prompt( "Seleccione un dia de su preferencia:\n1. Lunes \n2. Martes \n3. Miercoles \n4. Jueves \n5. Viernes"));
        break;
    default:
        alert ("Lo lamento debe seleccionar alguno de los valores relacionado con la especialidad. Para volver a empezar seleccione F5");
        break;
}};

if (isNaN(selectDia)) {
    error();
} else {
while (selectDia<6){
    switch (selectDia){
        case 1 :
        selectDia = "LUNES"
        selectHora = parseInt(prompt( "Seleccione un dia de su preferencia de Horario:\n\n1. 8.30 \n2. 9.00 \n3. 9.30 \n4. 10.00 \n5. 10.30"));
        break;
        
        case 2 :
        selectDia = "MARTES"
        selectHora = parseInt(prompt( "Seleccione un dia de su preferencia de Horario:\n\n1. 8.30 \n2. 9.00 \n3. 9.30 \n4. 10.00 \n5. 10.30"));
        break;
    
        case 3 :
        selectDia = "MIERCOLES"
        selectHora = parseInt(prompt( "Seleccione un dia de su preferencia de Horario:\n\n1. 8.30 \n2. 9.00 \n3. 9.30 \n4. 10.00 \n5. 10.30"));
        break;
    
        case 4 :
        selectDia = "JUEVES"
        selectHora = parseInt(prompt( "Seleccione un dia de su preferencia de Horario:\n\n1. 8.30 \n2. 9.00 \n3. 9.30 \n4. 10.00 \n5. 10.30"));
        break;
    
        case 5 :
        selectDia = "VIERNES"
        selectHora = parseInt(prompt( "Seleccione un dia de su preferencia de Horario:\n\n1. 8.30 \n2. 9.00 \n3. 9.30 \n4. 10.00 \n5. 10.30"));
        break;
    
        default: 
        alert ("Lo lamento debe seleccionar alguno de los valores relacionado con el dia. Para volver a empezar seleccione F5")
        break;
    }    
    if (isNaN(selectHora)) {
        error();
    } else {    
while(selectHora<6){
switch (selectHora) {
    case 1:
        selectHora = "8.30 hs"
        break;
    case 2:
        selectHora = "9.00 hs"
        break;
    case 3:
        selectHora = "9.30 hs"
        break;
    case 4:
        selectHora = "10.00 hs"
        break;
    case 5:
        selectHora = "10.30 hs"
        break;
    default:
        break;
};
tunroOtorgado ()}}};


if (selectEspecialidad>=5){error()}
else if (selectDia>=6) {error()}
else if (selectHora>=6) {error()}}};
let button = document.querySelector('.buttom-1');
let buttonContinue = document.querySelector('.b-final');

let nombre = document.querySelector ('.description-form');
let numero = document.querySelector('.number');
let mes = document.querySelector('.mes');
let año = document.querySelector('.año1');
let cvc = document.querySelector('.cvc1');
//input

let cnumero = document.querySelector('.tnumero');
let cnombre = document.querySelector('.tarjeta-nombre');
let cfechas = document.querySelector('.fechass');
let caños = document.querySelector('.añoss');
let cCvc = document.querySelector('.tarjeta-cvc');
//parrafos

let errorName = document.querySelector('.error1');
let errorNumero = document.querySelector('.error2');
let errorFecha = document.querySelector('.error3');
//error campo vacio

let tipoName = document.querySelector('.error1-1');
let tipoNumero = document.querySelector('.error2-1');
let tipoFecha = document.querySelector('.error3-1');
//error tipo de datos

let cerrarformulario = document.querySelector('.contenedor2');
let abrirformulario = document.querySelector('.mensajefinal');

function tiempoReal() {
    let a =numero.value.replace(/([0-9]{4})/g, '$1 ');
    cnumero.innerHTML=a;
    errorNumero.style.display='none';
    numero.style.borderColor='#a1ac88';
}

function tiempoReal1() {
    if (/^\s/.test(nombre.value)) {
        nombre.value='';  
    }
    let a =nombre.value;
    camposCadena(a);
    cnombre.innerHTML = a;
    errorName.style.display='none';
    nombre.style.borderColor='#a1ac88';  
}

function tiempoReal2() {
    let a = mes.value;
    cfechas.innerHTML=a;
    errorFecha.style.display='none';
    mes.style.borderColor='#a1ac88';
}

function tiempoReal3() {
    let a = año.value;
    caños.innerHTML=(" / ")+a;
    errorFecha.style.display='none';
    año.style.borderColor='#a1ac88';
}

function tiempoReal4() {
    let a =cvc.value;
    cCvc.innerHTML=a;
    errorFecha.style.display='none';
    cvc.style.borderColor='#a1ac88';
}
    
function camposCadena (string) { 
    let expresionNumero = /^[a-zA-Z ñ]*$/
    if(!expresionNumero.test(string)){
        nombre.value = string.replace(/\d/g, '');
        tipoName.style.display='block';
        console.log(string);
    } else {
        tipoName.style.display='none';
    } 
}

function camposNumeros(event) {
        if(event.charCode >= 48 && event.charCode <= 57){
        tipoNumero.style.display='none';
        return true;
         }
         tipoNumero.style.display='block';
         return false;   
    }

function camposNumeros2(event) {
    if(event.charCode >= 48 && event.charCode <= 57){
        tipoFecha.style.display='none';
        return true;
         }
         tipoFecha.style.display='block';
         return false;   
}

button.addEventListener ('click', function() {
    if (nombre.value.length==0) {
        errorName.style.display='block';
        nombre.style.borderColor='red';
    } else if (numero.value.length==0 ) {
        errorNumero.style.display='block';
        numero.style.borderColor='red';
    } else if (numero.value.length < 16){
        alert ('El numero de la tarjeta es de 16 dígitos');
    } else if (mes.value.length==0) {
        errorFecha.style.display='block';
        mes.style.borderColor='red';
    } else if (año.value.length==0) {
        errorFecha.style.display='block';
        año.style.borderColor='red';
    } else if (cvc.value.length==0) {
        errorFecha.style.display='block';
        cvc.style.borderColor='red';
    } else if (mes.value>12){
        alert('el mes no es valido');
    } else if (año.value<23 ||año.value>27){
        alert('El año es incorrecto');
    } else {
        cerrarformulario.style.display='none';
        abrirformulario.style.display='block';
    } } );

buttonContinue.addEventListener ('click', function() {
    location.reload();
    return true;
});
 
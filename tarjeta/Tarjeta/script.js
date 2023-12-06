const inputTarjeta = document.getElementById("inputTarjeta");
const inputFecha = document.getElementById("inputFecha");
const inputCw = document.getElementById("inputCw");

const mascaraNumero="####-####-####-####";
const mascaraFecha="##/##";
const mascaraCw = "###";

let tarjetaNumero = [];
let fechaNumero = [];
let cvvNumero = [];


inputTarjeta.addEventListener("keydown",(e) => {
    if(e.key === "Tab"){
        return;
    }
    e.preventDefault();//impida que se refresque la pantalla y obliga a digitar el tipo de dato especifio
    ingresoDatos(mascaraNumero,e.key,tarjetaNumero);
    inputTarjeta.value = tarjetaNumero.join("");
});

inputFecha.addEventListener("keydown",(e) =>{
    if(e.key === "Tab"){
        return;
    }
    e.preventDefault();
    ingresoDatos(mascaraFecha,e.key, fechaNumero);
    inputFecha.value = fechaNumero.join("");
});

inputCw.addEventListener("keydown",(e)=>{
    if(e.key === "Tab"){
        return;
    }
    e.preventDefault();
    ingresoDatos(mascaraCw, e.key, cvvNumero);
    inputCw.value=cvvNumero.join("");
});

function ingresoDatos(mascara, key, arreglo){
    let numeros = ["0","1","2","3","4","5","6","7","8","9"]
    if(key === "Backspace" && arreglo.length >0){
        arreglo.pop();
        return;
    }
    if(numeros.includes(key) && arreglo.length + 1 <= mascara.length){
        if(mascara[arreglo.length]==="-" || mascara[arreglo.length]==="/"){
            arreglo.push(mascara[arreglo.length],key);
        }else{
            arreglo.push(key);
        }
    }
}

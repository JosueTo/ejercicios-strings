// let string = "Abraham";
// let contadorFinal = 0;
// let letra = "";
// string = string.toUpperCase;

// for (let i = 0; i < string.length; i++) {
//   console.log(string.charAt(i));
//   let contTemp = 1;
//   for (let j = i+1; j < string.length; j++){
//     if (string.charAt(i) == string.charAt(j)){
//       contTemp++
//     }
//   }
//   if (contTemp > contador){
//     contadorFinal = contTemp;
//     letra = string.charAt(i);
//   }
// }

// console.log(letra, contadorFinal);
//Aquí se escribiran los ejercicios con Strings
let nombre ="Valeria Duque" ; //"Abraham";
nombre  = nombre.toUpperCase();
let letra="";
let contFinal=0;
for (let index = 0; index < nombre.length; index++) {
    console.log(nombre.charAt(index));
    let contTemp=1;
    for (let cont = index+1; cont < nombre.length; cont++) {
        if(nombre.charAt(index) == nombre.charAt(cont))
            contTemp++;
    } // for cont
    if (contTemp>contFinal) {
        contFinal=contTemp;
        letra = nombre.charAt(index);
    }//contTemp>contFinal
}// for index
console.log(letra, contFinal);


let palabraNueva = ""

function stringVolteao (palabra) {
    for(let i = palabra.length - 1; i >= 0; i--){
        palabraNueva += palabra.charAt(i);
    }
    return palabraNueva;
}

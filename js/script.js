// let nuevaPalabra = "";
// function voltearString(palabra) {
//   for (let i = palabra.length - 1; i >= 0; i--){
//     nuevaPalabra += palabra.charAt(i);
//   }
//   return nuevaPalabra;
// }

// let palindromo = "";

// function esPalindromo(str) {
//   str = str.toUpperCase();
//   str = str.replaceAll(" ", "");
//   for (let i = str.length - 1; i >= 0; i--){
//     palindromo += str.charAt(i);
//   }
  
//   return (str == palindromo);
// }

let btnEnviar = document.getElementById("btnEnviar")

btnEnviar.addEventListener("click", function(event){
  event.preventDefault();
  let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  let exampleFormControlInput1 = document.getElementById("exampleFormControlInput1");
  let exampleFormControlInput2 = document.getElementById("exampleFormControlInput2");
  let exampleFormControlTextarea1 = document.getElementById("exampleFormControlTextarea1");
  let alertError = document.getElementById("alertError");

  alertError.style.display = "none";
  alertError.innerHTML = "";
  // console.log(exampleFormControlTextarea1.value.length);
  // console.log("[" +
  //   exampleFormControlTextarea1.value.replaceAll("  ", "")
  //   + "]"
  // );
  // console.log(exampleFormControlTextarea1.value.replaceAll("  ", "").length);
  if (exampleFormControlTextarea1.value.trim().replaceAll("  ", "").length < 20) {
    alertError.innerHTML = "El mensaje debe contener 20 caracteres o más";
    alertError.style.display = "block";
    exampleFormControlTextarea1.focus();
    exampleFormControlTextarea1.select();
  }
  
  if (exampleFormControlInput1.value.match(emailRegex) == null) {
    alertError.style.display = "block";
    alertError.innerHTML += "<br/>El correo electrónico no es valido."
  }

  let RFCRegex = / /;
  if (exampleFormControlInput1.value.match(RFCRegex) == null) {
    alertError.style.display = "block";
    alertError.innerHTML += "<br/>El RFC no es valido."
  }




}


)



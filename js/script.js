let nuevaPalabra = "";
function voltearString(palabra) {
  for (let i = palabra.length - 1; i >= 0; i--){
    nuevaPalabra += palabra.charAt(i);
  }
  return nuevaPalabra;
}

let palindromo = "";

function esPalindromo(str) {
  str = str.toUpperCase();
  str = str.replaceAll(" ", "");
  for (let i = str.length - 1; i >= 0; i--){
    palindromo += str.charAt(i);
  }
  
  return (str == palindromo);
}
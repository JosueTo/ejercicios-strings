let string = "Abraham";
let contadorFinal = 0;
let letra = "";
string = string.toUpperCase;

for (let i = 0; i < string.length; i++) {
  console.log(string.charAt(i));
  let contTemp = 1;
  for (let j = i+1; j < string.length; j++){
    if (string.charAt(i) == string.charAt(j)){
      contTemp++
    }
  }
  if (contTemp > contador){
    contadorFinal = contTemp;
    letra = string.charAt(i);
  }
}

console.log(letra, contadorFinal);
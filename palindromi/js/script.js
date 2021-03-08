/* Una funzione per capire se la parola è
palindroma;*/

// funzione palindromi
function palindromi(parola){
  var reverse = "";

  var i = (parola.length - 1);
    for(i; i !== -1; i--){
      parola[i] = i;
      reverse += parola[i];
    }
    if(parola === reverse){
      return true;
    }
}

// variabile input con funzione palindromi
var input = palindromi(prompt("Inserisci parola!"));

// se palindromi(input) è vera la parola è palindroma 
if(input){
  alert("Parola palindroma!");
}else{
  alert("Parola non palindroma");
}

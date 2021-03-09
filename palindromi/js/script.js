// funzione palindromi
function palindromi(parola){
  var reverse = "";
  var i = (parola.length - 1);
  for(i; i !== -1; i--){
    reverse += parola[i];
  }
  if(parola === reverse){
    return true;
  }
  return false;
}

// variabile input con funzione palindromi
var input = prompt("Inserisci parola!");

// se palindromi(input) è vera la parola è palindroma
if(palindromi(input)){
  alert("Parola palindroma!");
}else{
  alert("Parola non palindroma");
}
console.log(input);

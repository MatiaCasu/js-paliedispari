/*L’utente sceglie pari o dispari e un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer.
Sommiamo i due numeri e dichiariamo chi ha vinto. */

// dichiarazioni variabili
var nUtente;
var nUtenteValido;
var scelta;
var nPC = Math.floor((Math.random() * 5) + 1 );
// /dichiarazioni variabili

// Validazioni Input
do{
  nUtente = parseInt(prompt("Inserisci un numero da 1 a 5!"));
  if(isNaN(nUtente)){
    alert("Non hai inserito un numero!");
  }
  else if(nUtente <= 0 || nUtente > 5){
    alert("Il numero deve essere tra 1 e 5");
  }
  else{
  var nUtenteValido = nUtente;
  }
}
while(nUtenteValido != nUtente);

do{
  scelta = prompt("Pari o dispari?");
  scelta = scelta.toLowerCase();
  if(scelta === "pari"){
    var pariString = scelta;
  }
  else if(scelta === "dispari"){
    var dispariString = scelta;
  }
  else{
    alert("Non hai digitato correttamente!")
  }
}
while(scelta !== pariString && scelta !== dispariString);
// /Validazioni Input


// Variabile Somma
var somma = nUtente + nPC;
// funzione pariDispari
function pariDispari(numero){
  if(numero % 2 == 0 && pariString){
    return true;
  }
  else if(numero % 2 !== 0 && dispariString){
    return true;
  }
}
// /funzione pariDispari

// Alert Vittoria/sconfitta
if(pariDispari(somma)){
  alert("hai vinto");
}
else{
  alert("hai perso");
}
//Alert vittoria/sconfitta
console.log(nUtente);
console.log(scelta);
console.log(nPC);
console.log(somma);

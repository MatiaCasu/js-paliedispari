/*L’utente sceglie pari o dispari e un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer.
Sommiamo i due numeri e dichiariamo chi ha vinto. */

// dichiarazioni variabili
var nUtente = parseInt(prompt("Inserisci un numero da 1 a 5!"));
console.log(nUtente);
var scelta = (prompt("Fai la tua scelta!"));
console.log(scelta);
var nPC = Math.floor((Math.random() * 5) + 1 );
console.log(nPC);
var somma = nUtente + nPC;
console.log(somma);
// /dichiarazioni variabili


// funzione pariDispari
function pariDispari(numero){
  if(numero % 2 == 0 && scelta === "pari"){
    return true;
  }
  else if(numero % 2 !== 0 && scelta === "dispari"){
    return true;
  }
}
// /funzione pariDispari

// Alert Vittoria/sconfitta
if(pariDispari(somma)){
  alert("hai vinto");
}
else{
  pariDispari("hai perso");
}
// /Alert vittoria/sconfitta

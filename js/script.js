// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati

var arrayPc = [];
for (var i = 0; i < 5; i++) {
  var numeroCasualePc = Math.floor(Math.random()*100 +1);
  arrayPc.push(numeroCasualePc);
  console.log(arrayPc);
}
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero
//alla volta, sempre compreso tra 1 e 100.

// L’utente non può inserire più volte lo stesso numero.

var arrayUtente = [];

for (var i = 0; i < 5; i++) {
  var numeroUtente = parseInt(prompt("Inserisci un numero"));
  arrayUtente.push(numeroUtente);
  console.log(arrayUtente);
}

 for (var c = 0; c < numeroCasualePc.length; c++) {
   if (numeroUtente == numeroCasualePc) {
     console.log("hai perso");
   }else {
     arrayUtente.push(numeroUtente);
   }for (var i = 0; i < array.length; i++) {
     array[i]
   }
 }

// Se il numero è presente nella lista dei numeri generati, la partita termina,
// altrimenti si continua chiedendo all’utente un altro numero.

// PROVA VECCHIA:
// var arrayAltroNumero =[];
// var arrayUtente = [];
// var c = 0;
// if (arrayUtente[c] == arrayPc[c]) {
//   console.log("Hai perso");
// }else {
//   for (var i = 0; i < 10; i++) {
//     var altroNumero = parseInt(prompt("Inserisci un altro numero"));
//     arrayAltroNumero.push(altroNumero);
//     console.log(arrayAltroNumero);
//   }
//   if (arrayAltroNumero[i] == arrayPc[i]) {
//     console.log("Hai perso");
//   }else{
//     console.log("hai vinto");
//   }
// }



// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge
//  il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio,
// cioè il numero di volte che l’utente ha inserito un numero consentito.

// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range
// di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50

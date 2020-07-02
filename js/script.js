// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// var arrayBombe = [1,2,5,10,40,15];//numeri randomici da generare
var arrayBombe = [];
var maxBombe = 16;
// var j = 0;
 while (arrayBombe.length < maxBombe) {
   console.log(arrayBombe.length );
   var bomba = getRandomIntInclusive(1, 100);
   if (inArray(arrayBombe, bomba) != true) {
     arrayBombe.push(bomba);
   }
 }
console.log(arrayBombe);
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero
//alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
var arrayUtente = [];
var maxTentativi = 5;
var punti = 0;
i = 0;
//L'utente inserisce dei numeri fino ad un massimo consentito
//o fino a quando non inserisce una mina
var trovato = false;
while (arrayUtente.length < maxTentativi && trovato == false) {
var numero = parseInt(prompt("inserisci un numero"));

if(inArray(arrayUtente, numero) == false){
  arrayUtente.push(numero);
}
if (inArray(arrayBombe, numero)) {
console.log("hai perso");
trovato = true;
}else{
  punti++;
}
// i++;
// }
if (punti == maxTentativi){
  console.log("hai vinto");
}
console.log("arrayUtente",arrayUtente);
console.log("punti",punti);
//FUNZIONE includes() determina se un array include un certo
//elemento,ritornando true o false a seconda del caso.
function inArray(array, elemento){
  var i = 0;
  var trovato = false;
  // questo ciclo si deve interrompere se raggiungo la lunghezza
  //dell'array oppure se trovo corrispondenza
  while (i < array.length && trovato == false) {
    console.log(i);
    if (array[i] == elemento ) {
      trovato = true;
    }
  i++;
  }
  return trovato;
}
//FUNZIONE NUMERO RANDOM
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
}




// // Il computer deve generare 16 numeri casuali tra 1 e 100.
// // I numeri non possono essere duplicati
//
// // fai prima la funzione che controlla se un elemento è presente in un array
// // poi generi i 16 numeri
//
// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
// }
//
// // i = 0;
// var arrayNumeriGenerati = [];
// while (arrayNumeriGenerati.length < 16) {
//   numeroRandom = getRandomIntInclusive(1, 30);
//   var incluso = arrayNumeriGenerati.includes(numeroRandom);
//   if (incluso == false) {
//     arrayNumeriGenerati.push(numeroRandom);
//   }
// }
// console.log(arrayNumeriGenerati);
//
// var arrayNumeriUtente = [];
// i = 0;
// while (arrayNumeriGenerati.length < 16){
//   var numeroUtente = parseInt(prompt("Inserisci un numero"));
//   var incluso2 = arrayNumeriUtente.includes(numeroUtente);
//   if (incluso2 == false) {
//     arrayNumeriUtente.push(numeroUtente);
//   }
// }
// console.log(arrayNumeriUtente);
// // var arrayPc = [];
// // for (var i = 0; i < 5; i++) {
// //   var numeroCasualePc = Math.floor(Math.random()*100 +1);
// //   arrayPc.push(numeroCasualePc);
// //   console.log(arrayPc);
// // }
// // In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero
// //alla volta, sempre compreso tra 1 e 100.
//
// // L’utente non può inserire più volte lo stesso numero.
//
// ///////////////////PROVA ANDREA////////////////////////////////////////////////
// // var arrayUtente = [];
// //
// // for (var i = 0; i < 5; i++) {
// //   var numeroUtente = parseInt(prompt("Inserisci un numero"));
// //   arrayUtente.push(numeroUtente);
// //   console.log(arrayUtente);
// // }
// //
// //  for (var c = 0; c < numeroCasualePc.length; c++) {
// //    if (numeroUtente == numeroCasualePc) {
// //      console.log("hai perso");
// //    }else {
// //      arrayUtente.push(numeroUtente);
// //    }for (var i = 0; i < array.length; i++) {
// //      array[i]
// //    }
// //  }
//
// // Se il numero è presente nella lista dei numeri generati, la partita termina,
// // altrimenti si continua chiedendo all’utente un altro numero.
//
// ////////////////////////////// PROVA VECCHIA://////////////////////////////////////////////////////////
// // var arrayAltroNumero =[];
// // var arrayUtente = [];
// // var c = 0;
// // if (arrayUtente[c] == arrayPc[c]) {
// //   console.log("Hai perso");
// // }else {
// //   for (var i = 0; i < 10; i++) {
// //     var altroNumero = parseInt(prompt("Inserisci un altro numero"));
// //     arrayAltroNumero.push(altroNumero);
// //     console.log(arrayAltroNumero);
// //   }
// //   if (arrayAltroNumero[i] == arrayPc[i]) {
// //     console.log("Hai perso");
// //   }else{
// //     console.log("hai vinto");
// //   }
// // }
//
//
//
// // La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge
// //  il numero massimo possibile di numeri consentiti.
// // Al termine della partita il software deve comunicare il punteggio,
// // cioè il numero di volte che l’utente ha inserito un numero consentito.
//
// // BONUS: (da fare solo se funziona tutto il resto)
// // all’inizio il software richiede anche una difficoltà all’utente che cambia il range
// // di numeri casuali:
// // con difficoltà 0 => tra 1 e 100
// // con difficoltà 1 =>  tra 1 e 80
// // con difficoltà 2 => tra 1 e 50

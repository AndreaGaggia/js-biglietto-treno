// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65

// inizio programma con le prime variabili
var distance = Number(prompt("Quanti chilometri vuoi percorrere?"));
var passengerAge = Number(prompt("Quanti anni hai?"));
var unitRate = .21;
// prezzo intero
var fullPrice = unitRate * distance;
// sconti
var discountUnder18 = fullPrice * .2;
var discountOver65 = fullPrice * .4;
// definizione casi e stampa nell'html
if (passengerAge < 18) {
  document.getElementById('price').innerHTML = fullPrice - discountUnder18 + " €"
} else if (passengerAge > 65) {
  document.getElementById('price').innerHTML = fullPrice - discountOver65 + " €"
} else {
  document.getElementById('price').innerHTML = fullPrice + " €"
}
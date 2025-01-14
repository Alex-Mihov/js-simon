// selezione degli elementi
const countdown = document.getElementById("countdown");
const numbersList = document.getElementById("numbers-list");
const form = document.getElementById("answers-form");
const inputElements = document.querySelectorAll("form-control");
const message = document.getElementById("message");

console.log(countdown, numbersList, form, inputElements, message);

// gestione dei numeri casuali
// creazione array vuoto
const numeriCasuali = [];

for (let i = 0; i < 5; i++) {

    // generazione numero random
    let numeroGenerato = Math.floor(Math.random() * 50) + 1;

    // verifica del numero doppione
    // SE il numero generato è già presente nell'array
    if (numeriCasuali.includes(numeroGenerato)) {

        // lo si toglie dall'array
        i--;
    }
    // ALTRIMENTI aggiungo il numero nell'array
    else {
        numeriCasuali.push(numeroGenerato)
    }
}
console.log( numeriCasuali); 

// mostro i numeri generati in pagina 
for () {

}

// gestione del countdown

// spariscono i numeri e appaiono 5 imput
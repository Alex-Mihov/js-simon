// selezione degli elementi
const countdownElement = document.getElementById("countdown");
const numbersList = document.getElementById("numbers-list");
const form = document.getElementById("answers-form");
const inputElements = document.querySelectorAll("form-control");
const message = document.getElementById("message");
const instructions = document.getElementById("instructions");

console.log(countdownElement, numbersList, form, inputElements, message);

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
for (let i = 0; i < numeriCasuali.length; i++) {
    // creazione costante che creale l'elemento li
    const li = document.createElement("li");
    li.append(numeriCasuali[i]);
    numbersList.appendChild(li);
}

// gestione del countdown
// secondi di parteza
let secondi = 5;

const countdown = setInterval(() => {

    // SE il countdown arriva a zero i numeri spariscono 
    if (secondi === 0) {
        instructions.innerText = "Ora inserisci i numeri!";

    }
    // ALTRIMENTI continia il countdown
    else {
        secondi += - 1;
        countdownElement.innerText = secondi;
    }

}, 1000);



// spariscono i numeri e appaiono 5 imput
// selezione degli elementi
const countdownElement = document.getElementById("countdown");
const numbersList = document.getElementById("numbers-list");
const form = document.getElementById("answers-form");
const inputElements = form.querySelectorAll("input"); // Corretto selettore per gli input
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
    if (numeriCasuali.includes(numeroGenerato)) {
        i--; // Ripeti il ciclo se il numero è duplicato
    } else {
        numeriCasuali.push(numeroGenerato);
    }
}
console.log(numeriCasuali);

// mostro i numeri generati in pagina 
for (let i = 0; i < numeriCasuali.length; i++) {
    // creazione costante che crea l'elemento li
    const li = document.createElement("li");
    li.append(numeriCasuali[i]);
    numbersList.appendChild(li);
}

// gestione del countdown
// secondi di partenza
let secondi = 30 + 1;

const countdown = setInterval(() => {
    if (secondi === 0) {
        // cambia il testo
        instructions.innerText = "Ora inserisci i numeri!";
        // sparisce il countdown
        countdownElement.classList.add("d-none");
        // spariscono i numeri generati
        numbersList.classList.add("d-none");
        // appaiono gli input con il tasto conferma
        form.classList.remove("d-none");
        clearInterval(countdown); // Ferma il countdown
    } else {
        secondi -= 1;
        countdownElement.innerText = secondi;
    }
}, 1000);

// gestione del form
form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Array per i numeri inseriti
    const numeriInseriti = [];
    inputElements.forEach((input) => {
        numeriInseriti.push(parseInt(input.value, 10)); // Converte i valori degli input in numeri
    });
    console.log("Numeri inseriti:", numeriInseriti);

    // Confronto dei numeri
    let match = 0;
    const numeriIndovinati = [];
    numeriInseriti.forEach((numero) => {
        if (numeriCasuali.includes(numero)) {
            match++;
            numeriIndovinati.push(numero);
        }
    });

    // Mostra i risultati
    if (match > 0) {
        message.innerHTML = `Hai trovato ${match} numero/i: ${numeriIndovinati.join(", ")}`;
        message.className = "text-success";
    } else {
        message.innerHTML = "Non hai indovinato nessun numero. Riprova!";
        message.className = "text-danger";
    }

    console.log(`Hai trovato ${match} corrispondenze:`, numeriIndovinati);
});

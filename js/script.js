// Raccolta dati
const name = prompt("Inserisci il tuo nome");
console.log(name, typeof name);

const surname = prompt("Inserisci il tuo cognome");
console.log(surname, typeof surname)

const favcolor = prompt("Inserisci il tuo colore perferito");
console.log(favcolor, typeof favcolor)

// Logica programma

// Concatenazione
// const password = name + surname + favcolor + "21";
// console.log(password, typeof password)

// Concatenazione template literal

const password = `${name}${surname}${favcolor}21`
console.log(password, typeof password)

// Messaggio
const message = `La tua password super sicura è ${password}!`
console.log(message, typeof message)

// Output
document.getElementById("safepassword").innerHTML = message





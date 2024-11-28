// 1 - Chiedo l'età
const age = Number(prompt("Inserisci l\'età del passeggero"));
// 2 - Chiedo i km che vuoi percorrere
const km = Number(prompt("Inserisci il numero di km che il passeggero vuole percorrere"));
// 3 - Calcolo il prezzo finale del biglietto in base all'età del passeggero
//   - Se il passeggero ha una età compresa tra i 18 e 65 anni allora il prezzo sarà:
const adultPrice = (km * 0.21);
//   - Se il passeggero ha una età inferiore ai 18 allora al prezzo finale sarà applicato uno sconto del 20% e sarà:
const kidsPrice = (km * 0.21) - ((km * 0.21) * 0.20);
//   - Se il passeggero ha una superiore ai 65 anni allora al prezzo finale sarà applicato uno sconto del 40% e sarà:
const seniorPrice = (km * 0.21) - ((km * 0.21) * 0.40);
// 4 - Il prezzo finale sarà arrotondato con due cifre dopo la virgola.
if(age >= 18 && age <= 65){
    alert(adultPrice.toFixed(2));
}
else if(age <= 18){
    alert(kidsPrice.toFixed(2));
}
else {(age >= 65)
    alert(seniorPrice.toFixed(2));
}

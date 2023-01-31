// Input

const teilnehmerTxt = document.querySelector("#teilnehmer");

const btnAdd = document.querySelector('input[value="Hinzufügen"]');
const btnRemove = document.querySelector('input[value="Rückgängig"]');

// output

const output = document.querySelector("ol");

// array

const teilnehmer = [];

//Teilhnehmer hinzufügen
btnAdd.addEventListener ("click", () => {
    let userInput = "<li>"+ (teilnehmerTxt.value);

    teilnehmer.push(userInput);
    output.innerHTML = teilnehmer.join('');
})

//letzten Teilnehmer entfernen
btnRemove.addEventListener ("click", () => {
    teilnehmer.pop();
    output.innerHTML = teilnehmer;
})

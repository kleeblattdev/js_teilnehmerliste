// Input

const teilnehmerTxt = document.querySelector("#teilnehmer");

const btnAdd = document.querySelector('input[value="Hinzufügen"]');
const btnRemove = document.querySelector('input[value="Rückgängig"]');

// output

const output = document.querySelector("ol");

// array

const teilnehmer = [];

btnAdd.addEventListener ("click", () => {
    let userInput = "<li>" + (teilnehmerTxt.value).toString();

    teilnehmer.push(userInput);
    console.log(teilnehmer);
    output.innerHTML = teilnehmer;
})

btnRemove.addEventListener ("click", () => {
    teilnehmer.pop();
    output.innerHTML = teilnehmer;
})

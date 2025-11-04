/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
function isFirstLetter (array){
    let result = [];
    for(let i = 0; i <array.length; i++){
        
        const listnames = array[i];
        const firstLetter = listnames[0];
        result.push(firstLetter)
    }
    console.log(result)
}


// Invoca la funzione qui e stampa il risultato in console

isFirstLetter(names)
console.log(isFirstLetter(names))

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
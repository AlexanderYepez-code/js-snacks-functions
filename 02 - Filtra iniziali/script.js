/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function searchingLetter (array, lettera){
    let result = [];
    for(let i = 0; i <array.length; i++){
        
        const listnames = array[i];
        const firstLetter = listnames[0];
        if (firstLetter ===lettera){
            result.push(listnames)
        }
        
    }
    

    
    console.log(result)
}
// Invoca la funzione qui e stampa il risultato in console
searchingLetter(names, "A")

console.log(searchingLetter(names, "A"))
//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
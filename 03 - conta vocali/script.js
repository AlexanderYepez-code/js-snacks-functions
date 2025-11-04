/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function cercaVocali (word){
    const vocali = ["a", "e", "i", "o", "u"];
    let risultato = 0;
    for (let i = 0; i < word.length; i++){
        console.log(i)
        const letter = word[i];
        console.log(letter);
        if (vocali.includes(letter)){
            risultato++
        }
            


    }
console.log(risultato)
}


// Invoca la funzione qui e stampa il risultato in console

cercaVocali('javascript')

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
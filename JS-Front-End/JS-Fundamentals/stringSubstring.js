// The input will be given as two separated strings (a word as a first parameter and a text as a second).
// Write a function that checks given text for containing a given word. The comparison should be case insensitive. Once you find a match, print the word and stop the program. 
// If you don't find the word print: "{word} not found!"


function solve (word, text) {
    let array = text.split(" ");
    let isFound = false;

    for (let index = 0; index < array.length; index++) {
        if (array[index].toLowerCase() === (word.toLowerCase())) {
            console.log(word);
            isFound = true;
            break;
        }
       
    }
    if (!isFound) {
        console.log(`${word} not found!`);
    }
}


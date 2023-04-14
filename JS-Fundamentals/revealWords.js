// Write a function, which receives two parameters. 
// The first parameter will be a string with some words separated by ', '.
// The second parameter will be a string that contains templates containing '*'.
// Find the word with the same length as the template and replace it.



function solve (string, text) {
    let stringArray = string.split(", ");
    let array = text.split(" ");
    
    for (let i = 0; i < array.length; i++) {
            for (let index = 0; index < stringArray.length; index++) {
            if (stringArray[index].length === array[i].length && array[i].includes("*") ) {
                array[i] = stringArray[index];
            }
        }
    }
    console.log(...array);
}


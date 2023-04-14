// You will receive a single string. 
// This string is written in PascalCase format. Your task here is to split this string by every word in it. 
// Print them joined by comma and space.


function solve (text) {
    let arrayText = text.split("");
    let resultText = "";
    for (let i = 0; i < arrayText.length - 1; i++) {
        if (arrayText[i + 1].toLowerCase() === arrayText[i + 1]) {
            resultText += arrayText[i];
        } else {
           resultText +=arrayText[i] + ", ";
        }
    }
    resultText += arrayText[arrayText.length -1];

    console.log(resultText);
}


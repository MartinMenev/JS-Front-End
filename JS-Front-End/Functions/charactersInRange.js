function charactersInRange(first, second) {
    printChars(first, second);


    function printChars(first, second) {
        let startAsciiCode = Math.min(first.charCodeAt(0), second.charCodeAt(0)) + 1;
        let endAsciiCode = Math.max(first.charCodeAt(0), second.charCodeAt(0));
        let result = "";
        for (let i = startAsciiCode; i < endAsciiCode; i++) {
            result += String.fromCharCode(i) + " ";
        }
        console.log(result);
    }
}


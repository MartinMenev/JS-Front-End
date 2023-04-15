function printSquareMatrix (number) {
    for (let index = 0; index < number; index++) {
        printRow(number);
    }

    function printRow(number) {
        let result = "";
        for (let i = 0; i < number; i++) {
            result += number + " "; 
        }
        console.log(result);
    }
}


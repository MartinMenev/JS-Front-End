function sum (number) {
    let oddSum = 0;
    let evenSum = 0;

    function isEven(n) {
        return n % 2 === 0;
    }

    function addEvenDigit(digit) {
        if (isEven(digit)) {
            evenSum += digit;
        }
    }

    function addOddDigit(digit) {
        if (!isEven(digit)) {
            oddSum +=digit;
        }
    }

    (""+number).split("")
        .map(n => Number(n))
        .forEach( n => {
            addEvenDigit(n);
            addOddDigit(n);
            })
    
    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}


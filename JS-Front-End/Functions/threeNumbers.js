function printSmallestNumber (...numbers) {
    let minElement = numbers[0];
    for (let i = 0; i < numbers.length - 1; i++) {
        let currentResult = returnSmallest(numbers[i], numbers[i +1]);
        if (currentResult < minElement) {
            minElement = currentResult;
        } 
    }
    
    console.log(minElement);
    
    function returnSmallest (a, b) {
        return (a < b) ? a : b;
    }
}


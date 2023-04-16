// Write a function that receives two integer numbers. Calculate the factorial of each number. 
// Divide the first result by the second and print the division formatted to the second decimal point.

function factorialDivision (firstNum, secondNum) {
    console.log((checkFactorial(firstNum)/checkFactorial(secondNum)).toFixed(2));

    function checkFactorial (number) {
        let result = 1;
        for (let  i= 1; i <= number; i++) {
            result *= i;
        }
        return result;
    }
}


// You will receive a single number between 0 and 100, which is divided with 10 without residue (0, 10, 20, 30...). 
// Your task is to create a function that visualizes a loading bar depending on the number you have received in the input.


function loadingBar(number) {
    if (isComplete(number)) {
        console.log("100% Complete!");
        console.log(`[${printStatus(number)}]`);
    } else {
        console.log(`${number}% [${printStatus(number)}]`);
        console.log("Still loading...");
    }


    function isComplete(number) {
        return (number === 100);
    }

    function printStatus(number) {
        let status = "%".repeat(number / 10);
        status += ".".repeat(10 - (number / 10));
        return status;
    }
}

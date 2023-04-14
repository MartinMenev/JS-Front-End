// Write a function that receives an array and the number of rotations you have to perform. 
// Note: Depending on the number of rotations, the first element goes to the end.


function solve (array, numberOfRotations) {
    numberOfRotations %= array.length;
    for (let i = 0; i < numberOfRotations; i++) {
        array.push(array.shift());
    }
    console.log(array.join(" "))

}


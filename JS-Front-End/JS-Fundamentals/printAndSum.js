function solve (start, end) {
    let sum = 0;
    let result = start;
    
for (let i = start; i <= end; i++) {
    sum += i;
    if (i != start) {
        result += " " + i;
    }
}

console.log(result);
console.log(`Sum: ${sum}`)

}

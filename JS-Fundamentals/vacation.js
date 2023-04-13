function solve (groupOfPeople, groupType, weekDay) {
let price = 0;

if (groupType === "Students") {
    switch (weekDay) {
        case "Friday" : price = 8.45; break;
        case "Saturday" : price = 9.80; break;
        case "Sunday" : price = 10.46; break;
    } 
    if (groupOfPeople >= 30) {
        price -= 0.15 * price;
    }

} else if (groupType === "Business") {
    switch (weekDay) {
        case "Friday" : price = 10.90; break;
        case "Saturday" : price = 15.60; break;
        case "Sunday" : price = 16.00; break;
    } 
    if (groupOfPeople >= 100) {
        groupOfPeople -= 10;
    }


} else if (groupType === "Regular") {
    switch (weekDay) {
        case "Friday" : price = 15.00; break;
        case "Saturday" : price = 20.00; break;
        case "Sunday" : price = 22.50; break;
    } 
    if (groupOfPeople >= 10 && groupOfPeople <= 20) {
        price -= 0.05 * price;
    }
}

price *= groupOfPeople;

console.log(`Total price: ${price.toFixed(2)}`)
}

solve(30, "Regular", "Saturday")
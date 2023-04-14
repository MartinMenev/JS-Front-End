function solve (fruitType, weightGrams, pricePerKg) {
    let kilograms = weightGrams / 1000;
    let price = pricePerKg * kilograms;

    console.log(`I need $${price.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${fruitType}.`)
}


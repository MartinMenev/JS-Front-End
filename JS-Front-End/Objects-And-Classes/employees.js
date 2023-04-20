function listEmployees(employees) {
    let person = {}
    for (const employee of employees) {
        let [name, number] = employee.split(", ");
        person[name] = name.length;
    }

    for (const key in person) {
        console.log(`Name: ${key} -- Personal Number: ${person[key]}`)

    }
}


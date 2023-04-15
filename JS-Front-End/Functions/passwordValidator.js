function passwordValidate (input) {

    if (checkContent(input) && containsNumber(input) && checkIf2digits(input)) {
        console.log(`Password is valid`);
    } else {
        if (!checkValidLength(input)) {
            console.log("Password must be between 6 and 10 characters");
        }
        if (!checkContent(input)) {
            console.log("Password must consist only of letters and digits");
        }
        if (!checkIf2digits(input)) {
            console.log("Password must have at least 2 digits");
        }

    }

    function checkValidLength(text) {
       return text.length >= 6 && text.length <= 10;
    }

    function onlyLettersAndNumbers(str) {
        return /^[A-Za-z0-9]*$/.test(str);
      }

    function checkContent(text) {
    
       return onlyLettersAndNumbers(text);
    }

    function containsNumber(str) {
        return /\d/.test(str);
      }

    function checkIf2digits(text) {
       let count = 0;
       text.split("").forEach(element => {
        if (containsNumber(element)) {
            count++;
        }
       });

       if (count >= 2) {
        return true;
       } else {
        return false;
       }
    }
}

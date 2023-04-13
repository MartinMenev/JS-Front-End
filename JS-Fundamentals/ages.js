function solve (num) {
    if (num >= 0 && num < 3) {
        console.log("baby")
    } else if (num >= 0 && num < 14) {
        console.log("child")
    } else if (num >= 0 && num < 20) {
        console.log("teenager")
    } else if (num >= 0 && num < 66) {
        console.log("adult")
    } else if (num >= 0 && num >= 66) {
        console.log("elder")
    } else {
        console.log("out of bounds")
    }
}



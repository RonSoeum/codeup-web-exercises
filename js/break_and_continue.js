'use strict';

function isNumeric(number) {
    return (!isNaN(parseFloat(number)));
}

function isOdd(number) {
    return number % 2 !== 0
}

function oddNumbers() {
    var userOdd = prompt('Enter an odd number between 1 and 50.');

    for(var i = 1; i < 50; i++) {
        if (isNumeric(userOdd) && isOdd(userOdd) && userOdd < 50) {
            if (i === parseFloat(userOdd)) {
                console.log("Yikes! Skipping number: " + userOdd);
            } else if(isOdd(i)) {
                console.log('Here is an odd number: ' + i);
            }
        } else {
            userOdd = prompt('Enter an odd number between 1 and 50.');
        }
    }
}

oddNumbers();
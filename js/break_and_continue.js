'use strict';

function isNumeric(number) {
    return (!isNaN(parseFloat(number)));
}

function isEven(number) {
    return number % 2 === 0;
}

function isOdd(number) {
    return number % 2 !== 0;
}

function oddNumbers() {
    var userOdd = prompt('Enter an odd number between 1 and 50.');

    while (!isNumeric(userOdd) || isEven(userOdd) || userOdd > 50 || userOdd < 1) {
            userOdd = prompt('Enter an odd number between 1 and 50.');
            /* Break is unnecessary and "Breaks" the loop */
    }

    console.log('Number to skip: ' + userOdd);

    for (var i = 1; i < 50; i++) {
        if (i === parseFloat(userOdd)) {
            console.log("Yikes! Skipping number: " + userOdd);
            continue; /* unnecessary, but satisfies the exercise */
        } else if (isOdd(i)) {
            console.log('Here is an odd number: ' + i);
        }
    }
}

oddNumbers();

/* user is able to enter any number that starts with a number and includes letters */
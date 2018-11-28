'use strict';

function showMultiplicationTable() {
    var randomNumber = Math.floor(Math.random() * 180) + 20;

    for(var i = 1; i < 11; i++) {
        console.log(randomNumber + ' x ' + i + " = " + randomNumber * i);
    }
}

showMultiplicationTable();

function oddEven() {
    for(var i = 1; i < 11; i++) {
        var randomNumber = Math.floor(Math.random() * 180) + 20;

        if(randomNumber % 2 === 0) {
            console.log(randomNumber + ' is ' + 'even.')
        } else {
            console.log(randomNumber + ' is ' + 'odd.')
        }
    }
}

oddEven();

function ascending() {
    for(var n = 1, o = "1"; n < 10; n++, o += 1) {
        var no = n * parseFloat(o);
        console.log(no);
    }
}

ascending();

function descending() {
    for(var l = 100; l >= 5 ; l -= 5 ) {
        console.log(l);
    }
}

descending();
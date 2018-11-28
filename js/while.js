"use strict";

function powerOfTwo () {
    var i = 2;

    while (i < 65537) {
        console.log(i);
        i *= 2;
    }
}

powerOfTwo();

function sellCones() {
    var allCones = Math.floor(Math.random() * 50) + 50;

    do {
        var soldAmount = Math.floor(Math.random() * 5) + 1;

        console.log('I have ' + allCones + ' cones.');

        if(allCones === 0) {
            console.log('Yay! I sold them all!');
            break;
        } else if(allCones < soldAmount) {
            console.log('I cannot sell you ' + soldAmount + ' cones, I only have ' + allCones + '.');
        } else if(soldAmount <= allCones) {
            allCones = allCones - soldAmount;
            console.log(soldAmount + ' cones sold...');
        }
    } while (allCones >= 0);
}

sellCones();
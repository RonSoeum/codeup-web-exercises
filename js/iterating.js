(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var names = ['Albert', 'Janet', 'Jeremy', 'Leslie'];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log('There are ' + names.length + ' elements in the names array.');

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log('names: ' + names[0]);
    console.log('names: ' + names[1]);
    console.log('names: ' + names[2]);
    console.log('names: ' + names[3]);

    // console.log('Here is the list of names in the names array: ' + names[0] + ', ' + names[1] + ', ' + names[2] + ', and ' + names[3] + '.');

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for (var i = 0; i < names.length; i++) {
        console.log('The name at index ' + i + " is: " + names[i] + '.');
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    names.forEach(function (element, index) {
        console.log('The name at index ' + index + " is: " + element + '.')
    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    function first (array) {
        console.log('The first item in the array ' + array + ' is: ' + array[0] + '.');
        return array[0];
    }

    function second (array) {
        console.log('The second item in the array ' + array + ' is: ' + array[1] + '.');
        return array[1];

    }

    function last (array) {
        console.log('The last item in the array ' + array + ' is: ' + array[array.length -1] + '.');
        return array[array.length -1];

    }

    first(numbers);

    second(numbers);

    last(numbers);

    // Bonus

    function oneHundred () {
        var iArray = [];

        for (var i = 1; i < 101; i++) {
            iArray.push(i);
        }

        return iArray;
    }

    console.log('oneHundred: ' + oneHundred());

    function reverse (array) {
        var arrayReverse = array.slice().reverse();

        console.log('Here is the array in reverse: ' + arrayReverse);

        return arrayReverse;
    }

    reverse(numbers);

    function sumAll (array) {
        var arraySum = array.reduce(function (a, b) {
            return a + b;
        }, 0);

        console.log('The sum is: ' + arraySum);

        return arraySum;
    }

    sumAll(oneHundred());

    function multiplyAll (array) {
        var arrayMultiply = array.reduce(function (a, b) {
            return a * b;
        });

        console.log('The product is: ' + arrayMultiply);

        return arrayMultiply;
    }

    multiplyAll(oneHundred());

})();
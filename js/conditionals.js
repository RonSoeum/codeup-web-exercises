"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

function isNumeric(input) {
    return !isNaN(parseFloat(input))
}

function isEven(number) {
    return number % 2 === 0
}

function add100(number) {
    return 100 + parseFloat(number)
}

function isPositive(number) {
    return number > 0
}

function isNegative(number) {
    return number < 0
}

function userNumber() {
    var confirmed = confirm("Would you like to enter a number?");

    if (confirmed) {
        var number = parseFloat(prompt("Please, enter a number."));

        if (isNumeric(number)) {
            if (isEven(number)) {
                alert("The number " + number + " is even.")
            }
            else {
                alert("The number " + number + " is odd.")
            }

            alert(number + " + " + 100 + " = " + add100(number));

            if (isPositive(number)) {
                alert("The number " + number + " is positive.")
            }
            else if (isNegative(number)) {
                alert("The number " + number + " is negative.")
            }
            else {
                alert("The number " + number + " is neither positive or negative.")
            }
        }
        else {
            alert("You did not enter a number. Please refresh and try again.")
        }
    }
    else {
        alert("You did not want to enter a number.")
    }
}

userNumber();

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

function analyzeColor(color) {
    color = color.toLowerCase();

    if ("red" === color) {
        return "Strawberries are red."
    }
    else if ("orange" === color) {
        return "Oranges are orange."
    }
    else if ("yellow" === color) {
        return "Bananas are yellow."
    }
    else if("green" === color) {
        return "Peas are green."
    }
    else if("blue" === color) {
        return "Blue is the color of the sky."
    }
    else if("indigo" === color) {
        return "Indigo is one of the seven colors of the rainbow."
    }
    else if("violet" === color) {
        return "Violets are violet."
    }
    else {
        return "I don't know that color."
    }
}

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

function analyzeColorRefactored(color) {
    switch (color) {
        case "red":
            return "Strawberries are red.";
        case "orange":
            return "Oranges are orange.";
        case "yellow":
            return "Bananas are yellow.";
        case "green":
            return "Peas are green.";
        case "blue":
            return "Blue is the color of the sky.";
        case "indigo":
            return "Indigo is one of the seven colors of the rainbow.";
        case "violet":
            return "Violets are violet.";
        default:
            return "I don't know that color."
    }
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

function userColor() {
    var color = prompt("Enter a color.");

    alert(analyzeColorRefactored(color))
}

userColor();

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function luckyDiscount(number) {
    if (1 === number) {
        return .10;
    }
    else if (2 === number) {
        return .25;
    }
    else if (3 === number) {
        return .35;
    }
    else if (4 === number) {
        return .50;
    }
    else if (5 === number) {
        return 1;
    }
    else {
        return 0;
    }
}

function calculateTotal(luckynumber, totalAmount) {
    var discountedAmount = parseFloat(luckyDiscount(luckyNumber)) * totalAmount;

    return totalAmount - discountedAmount
}

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

function walmartDiscount() {
    var totalAmount = parseFloat(prompt("What is the cost of the total bill?"));

    if (isNumeric(totalAmount)) {
        alert("Your lucky number is " + luckyNumber);

        alert("Your price before the discount is $" + totalAmount);

        alert("Your price after the discount is $" + calculateTotal(luckyNumber, totalAmount).toFixed(2))
    }
    else {
        alert("You did not enter a numeric value.")
    }
}

walmartDiscount();
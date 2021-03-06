"use strict";

/**
 * TODO:
 * Create an object with firstName and lastName properties that are strings
 * with your first and last name. Store this object in a variable named
 * `person`.
 *
 * Example:
 *  > console.log(person.firstName) // "Rick"
 *  > console.log(person.lastName) // "Sanchez"
 */


var person = {
    firstName: 'Ron'
};

person.lastName = 'Soeum';

console.log(person.firstName);
console.log(person.lastName);


/**
 * TODO:
 * Add a sayHello method to the person object that returns a greeting using
 * the firstName and lastName properties.
 * console.log the returned message to check your work
 *
 * Example
 * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
 */

person.sayHello = function() {
    return 'Hello from ' + this.firstName + ' ' + this.lastName + '!'
};

console.log(person.sayHello());


/** TODO:
 * HEB has an offer for the shoppers that buy products amounting to
 * more than $200. If a shopper spends more than $200, they get a 12%
 * discount. Write a JS program, using conditionals, that logs to the
 * browser, how much Ryan, Cameron and George need to pay. We know that
 * Cameron bought $180, Ryan $250 and George $320. Your program will have to
 * display a line with the name of the person, the amount before the
 * discount, the discount, if any, and the amount after the discount.
 *
 * Uncomment the lines below to create an array of objects where each object
 * represents one shopper. Use a foreach loop to iterate through the array,
 * and console.log the relevant messages for each person
 */


var shoppers = [
    {name: 'Cameron', amount: 180},
    {name: 'Ryan', amount: 250},
    {name: 'George', amount: 320}
];

function shopHEB(arrayOfShoppers) {
    arrayOfShoppers.forEach(function(shopper) {
        var discountAmount = (shopper.amount >= 200) ? shopper.amount * .12 : 0;
        var discountApplied = (discountAmount > 0) ? 'receives a discount of $' + discountAmount.toFixed(2) + '.' : 'did not receive a discount.';
        var uPay = shopper.amount - discountAmount;
        console.log(shopper.name + ' spends $' + shopper.amount + " and " + discountApplied + '\n' + 'The total amount after the discount is $' + uPay.toFixed(2));
    })
}

shopHEB(shoppers);


/** TODO:
 * Create an array of objects that represent books and store it in a
 * variable named `books`. Each object should have a title and an author
 * property. The author property should be an object with properties
 * `firstName` and `lastName`. Be creative and add at least 5 books to the
 * array
 *
 * Example:
 * > console.log(books[0].title) // "The Salmon of Doubt"
 * > console.log(books[0].author.firstName) // "Douglas"
 * > console.log(books[0].author.lastName) // "Adams"
 */


var books = [
    {
        title: 'Lincoln in the Bardo',
        author: {
            firstName: 'George',
            lastName: 'Saunders'
        }
    },
    {
        title: 'Everything Happens for a Reason and Other Lies I\'ve Loved',
        author: {
            firstName: 'Kate',
            lastName: 'Bowler'
        }
        },
    {
        title: 'Origin Story: A Big History of Everything',
        author: {
            firstName: 'David',
            lastName: 'Christian'
        }
        },
    {
        title: 'Factfulness',
        author: {
            firstName: 'Hans',
            lastName: 'Rosling'
        }
        },
    {
        title: 'Leonardo Da Vinci',
        author: {
            firstName: 'Walter',
            lastName: 'Isaacson'
        }
    }
];


console.log(books[0].title);
console.log(books[0].author.firstName);
console.log(books[0].author.lastName);
console.log(books[1].title);
console.log(books[1].author.firstName);
console.log(books[1].author.lastName);
console.log(books[2].title);
console.log(books[2].author.firstName);
console.log(books[2].author.lastName);
console.log(books[3].title);
console.log(books[3].author.firstName);
console.log(books[3].author.lastName);
console.log(books[4].title);
console.log(books[4].author.firstName);
console.log(books[4].author.lastName);


/**
 * TODO:
 * Loop through the books array and output the following information about
 * each book:
 * - the book number (use the index of the book in the array)
 * - the book title
 * - author's full name (first name + last name)
 *
 * Example Console Output:
 *
 *      Book # 1
 *      Title: The Salmon of Doubt
 *      Author: Douglas Adams
 *      ---
 *      Book # 2
 *      Title: Walkaway
 *      Author: Cory Doctorow
 *      ---
 *      Book # 3
 *      Title: A Brief History of Time
 *      Author: Stephen Hawking
 *      ---
 *      ...
 */


//Refactored for Bonus
//
// books.forEach(function(book, index) {
//     console.log('Book # ' + (index + 1));
//     console.log('Title: ' + book.title);
//     console.log('Author: ' + book.author.firstName + ' ' + book.author.lastName);
//     console.log('---');
// });


/**
 * Bonus:
 * - Create a function named `createBook` that accepts a title and author
 *   name and returns a book object with the properties described
 *   previously. Refactor your code that creates the books array to instead
 *   use your function.
 * - Create a function named `showBookInfo` that accepts a book object and
 *   outputs the information described above. Refactor your loop to use your
 *   `showBookInfo` function.
 */


// My Code
//
// function CreateBook(bookTitle, authorFirstName, authorLastName) {
//     this.book = {
//         title: bookTitle,
//         author: {
//             firstName: authorFirstName,
//             lastName: authorLastName
//         }
//     };
// }
//
// var book1 = new CreateBook('Lincoln in the Bardo', 'George', 'Saunders');
// var book2 = new CreateBook('Everything Happens for a Reason and Other Lies I\'ve Loved', 'Kate', 'Bowler');
// var book3 = new CreateBook('Origin Story: A Big History of Everything', 'David', 'Christian');
// var book4 = new CreateBook('Factfulness', 'Hans', 'Rosling');
// var book5 = new CreateBook('Leonardo Da Vinci', 'Walter','Isaacson');
//
// var boooks = [book1, book2, book3, book4, book5];
//
// function showBookInfo(book, index) {
//     console.log('Book # ' + (index + 1));
//     console.log('Title: ' + book.book.title);
//     console.log('Author: ' + book.book.author.firstName + ' ' + book.book.author.lastName);
//     console.log('---');
// }
//
// boooks.forEach(function(book, index) {
//    showBookInfo(book, index)
// });

// Class Example

function createBook(title, author) {
    var name = author.split(' ');
    return {
        title: title,
        author: {
            firstName: name[0],
            lastName: name[1]
        }
    }
}

books.push(createBook('Harry Potter', 'JK Rowling'));

books.forEach(function(book, index) {
    console.log('Book # ' + (index + 1));
    showBookInfo(book)
});

function showBookInfo(book) {
    console.log('Title: ' + book.title);
    console.log('Author:' + book.author.firstName + ' ' + book.author.lastName);
    console.log('---');
}


// More Bonus: Bonus 1

var dog = {
    breed: 'pomeranian',
    weightInPounds: 7,
    age: 1,
    color: 'cream',
    sterilized: true,
    shotRecords: [
        {vaccine: 'heart worm', date: 'Dec 1, 2018'},
        {vaccine: 'bordetella', date: 'Nov 15, 2018'},
        {vaccine: 'canine adenovirus-2', date: 'Oct 7, 2018'},
        {vaccine: 'canine parvovirus', date: 'Oct 7, 2018'}
        ],
    bark: function() {
        console.log('Woof!');
    },
    getOlder: function() {
        return ++this.age;
    },
    fix: function() {
        if(this.sterilized === false) {
            return this.sterilized === true;
        }
    },
    vaccinate: function(vaccine, date) {

    }
};

// Bonus 2

var bookks = [
    {title: 'Lincoln in the Bardo',
        author: {firstName: 'George', lastName: 'Saunders'}, available: 'Dec 1, 2018/09:05'},

    {title: 'Everything Happens for a Reason and Other Lies I\'ve Loved',
        author: {firstName: 'Kate', lastName: 'Bowler'}, available: 'Dec 2, 2018/10:10'},

    {title: 'Origin Story: A Big History of Everything',
        author: {firstName: 'David', lastName: 'Christian'}, available: 'Dec 3, 2018/11:15'},

    {title: 'Factfulness',
        author: {firstName: 'Hans', lastName: 'Rosling'}, available: 'Dec 4, 2018/12:20'},

    {title: 'Leonardo Da Vinci',
        author: {firstName: 'Walter', lastName: 'Isaacson'}, available: 'Dec 5, 2018/12:25'},

    {genre: ['Historical Fiction', 'Magical Realism', 'Non-Fiction', 'Faith & Spirituality', 'Biography & Memoir', 'History', 'Science & Medicine', 'Biography']},
    {available: true},
    {dateAvailable: ''}
];

// Historical fiction Magical realism
//
// nonfiction, faith & spirituality, biography & memoir
//
// HISTORY / SCIENCE & MEDICINE
//
// Non-fiction
//
// Biography

// Bonus 3

// More

var jackBox = {
    triggered: false,
    intervalID: null,
    play: function() {
        if(this.triggered === false) {
                console.log(this.lyrics.forEach(function (element) {
                    return element;
                }));
            return this.triggered === true;
        }
    },
    windUp: function() {
        window.stop();
        return this.triggered === false;
    },
    lyrics: ['All a-...', "-round the ...", "mulberry...", "bush, The...", "monkey...", "chased the...", "wea-...", "-sel...", "The monkey...", "stopped to...", "pull up his...", "sock,...", "Pop!...", "goes the...", "wea-...", "-sel."]
};



// Alternative Code
//
// for(var i = 0; i < boooks.length; i++) {
//     showBookInfo(boooks[i], i);
// }
"use strict";

console.log("Hello from external JavaScript.")
alert("Welcome to my Website!")
var color = prompt("What is your favorite color?")
alert("Great, " + color + " is my favorite color too!")

// Previous Exercise #3

// Movie Rentals
var theLittleMermaidDays = 3
var brotherBearDays = 5
var herculesDays = 1
var pricePerDay = 3
var totalPrice = (theLittleMermaidDays * pricePerDay) + (brotherBearDays * pricePerDay) + (herculesDays * pricePerDay)
alert("The price you have to pay for movie rentals is $" + totalPrice)

// Weekly Pay
var googleRate = 400
var googleHours = 6
var amazonRate = 380
var amazonHours = 4
var facebookRate = 350
var facebookHours = 10
var weeklyPay = (googleRate * googleHours) + (amazonRate * amazonHours) + (facebookRate * facebookHours)
alert("Your weekly payment for contractor work is $" + weeklyPay)

// Class Enrollment
var classHasRoom = confirm("Does the class have room for more students?")
var classScheduleGood = confirm("Does your current schedule conflict with the class?")
var canBeEnrolled = classHasRoom && !classScheduleGood
alert("Eligible for class enrollment? " + canBeEnrolled)

// Product Offer
var itemsPurchased = prompt("How many items are you purchasing?")
var purchaseEligility = itemsPurchased > 2
var premiumMember = confirm("Are you a premium member")
var offerNotExpired = true
var productOffer = offerNotExpired && (purchaseEligility || premiumMember)
alert("Eligible for product offer? " + productOffer)
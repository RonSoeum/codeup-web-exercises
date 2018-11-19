"use strict";

console.log("Hello from external JavaScript.")
alert("Welcome to my Website!")
var color = prompt("What is your favorite color?")
alert("Great, " + color + " is my favorite color too!")

// Previous Exercise #3

// Movie Rentals
var theLittleMermaidDays = prompt("How many days do you want to rent The Litter Mermaid?")
var brotherBearDays = prompt("How many days do you want to rent Brother Bears?")
var herculesDays = prompt("How many days do you want to rent Hercules?")
var pricePerDay = prompt("What is the price per day to rent a movie?")
var totalPrice = (parseFloat(theLittleMermaidDays) * parseFloat(pricePerDay)) + (parseFloat(brotherBearDays) * parseFloat(pricePerDay)) + (parseFloat(herculesDays) * parseFloat(pricePerDay))
alert("The price you have to pay for movie rentals is $" + totalPrice)

// Weekly Pay
var googleRate = prompt("What is the hourly rate from working at Google?")
var googleHours = prompt("How many hours did you work at Google this week?")
var amazonRate = prompt("What is the hourly rate from working at Amazon?")
var amazonHours = prompt("How many hours did you work at Amazon this week?")
var facebookRate = prompt("What is the hourly rate from working at Facebook?")
var facebookHours = prompt("How many hours did you work at Facebook this week?")
var weeklyPay = (parseFloat(googleRate) * parseFloat(googleHours)) + (parseFloat(amazonRate) * parseFloat(amazonHours)) + (parseFloat(facebookRate) * parseFloat(facebookHours))
alert("Your weekly payment for contractor work is $" + weeklyPay)

// Class Enrollment
var classHasRoom = confirm("Does the class have room for more students?")
var classScheduleGood = confirm("Does your current schedule conflict with the class?")
var canBeEnrolled = classHasRoom && !classScheduleGood
alert("It is " + canBeEnrolled + " that you can enroll in this class.")

// Product Offer
var itemsPurchased = prompt("How many items are you purchasing?")
var purchaseEligility = itemsPurchased > 2
var premiumMember = confirm("Are you a premium member")
var offerNotExpired = true
var productOffer = offerNotExpired && (purchaseEligility || premiumMember)
alert("It is " + productOffer + " that you are eligible for the product offer.")
/*
    Input:
        - How many tickets do you want?
        - What kind of ticket do you want?

        Student ticket: 300 HUF
        Adult ticket: 350 HUF
        Pensioner ticket: 280 HUF

        10% discount for purchases of more than 10 tickets
*/

var quantityOfTicket = prompt('How many tickets would you like to buy? Give me the quantity, please!')
var typeOfTicket = prompt('What kind of ticket do you want? student | adult | pensioner')

var price = {
    student : 300,
    adult : 350,
    pensioner : 280,
}

var discount = quantityOfTicket > 10 ? 0.9 : 1;

var totalPrice = quantityOfTicket * price[typeOfTicket] * discount

alert("Total price: " + totalPrice + " HUF");
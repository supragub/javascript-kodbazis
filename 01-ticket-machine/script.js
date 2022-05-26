/*
    Input:
        - How many tickets do you want? (prompt)
        - What kind of ticket do you want? (prompt)

        Student ticket: 300 HUF
        Adult ticket: 350 HUF
        Pensioner ticket: 280 HUF

        10% discount for purchases of more than 10 tickets

        Validate the quantity, type and price of ticket.
*/

var quantityOfTicket = prompt('How many tickets would you like to buy? Give me the quantity, please!');

while (!quantityOfTicket.match(/^\d+/)) {
    var quantityOfTicket = prompt('Wrong format! Give me a number, please!'); 
}

var typeOfTicket = prompt('What kind of ticket do you want? student | adult | pensioner');

while (typeOfTicket != 'student' && typeOfTicket != 'adult' && typeOfTicket != 'pensioner') {
    var typeOfTicket = prompt('Wrong type of ticket! Options: student | adult | pensioner');
}

var price = {
    student : 300,
    adult : 350,
    pensioner : 280,
};

if (price === undefined) {
    alert('Error! Invalid price! ');

} else {
    var discount = quantityOfTicket > 10 ? 0.9 : 1;

    var totalPrice = quantityOfTicket * price[typeOfTicket] * discount;
    
    alert("Total price: " + totalPrice + " HUF");
}
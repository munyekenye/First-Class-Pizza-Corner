// // declaring variables
var pizzaSize = [
    "Small",
    "Medium",
    "Large",
];
var pizzaFlavour = [
    "Veg Feast",
    "Cheese Burger",
    "Chicken",
    "Meat Deluxe",
    "Chicken & Mushroom",
]
var pizzaTopping = [
    "Onion",
    "Mushroom",
    "bacon",
    "black olives",
];

var pizzaCrust = [
    "Cheese-Stuffed crust",
    "Thin crust",
    "Neapolitan crust",
    "NY style crust",
];
// calling functions

function getSize() {
    var size = document.getElementById("pizzasize").value;
    return parseInt(size);
}
function getFlavour() {

    var flavour = document.getElementById("pizzaflavour").value;
    return parseInt(flavour);
}

function getCrust() {
    var crust = document.getElementById("pizzacrust").value;
    return parseInt(crust);
}
function getTopping() {
    var topping = document.getElementById("pizzatopping").value;
    return parseInt(topping);
}
function getNumber() {
    var number = document.getElementById("number").value;
    return parseInt(number);
}
function getAmount() {
    var results = (getFlavour() + getSize() + getCrust() + getTopping()) * getNumber();
    alert(
        "You've ordered " +
        getNumber("") +
        " pizza's," +
        "which amounts to Ksh. " +
        results +
        " Thanks for  choosing us, welcome back again!"
    );
    prompt("Enter delivery location");
    prompt("Enter your name");
    prompt("Enter your phone number")
    alert("Your order will be delivered in a while, delivery fee is  Ksh.200/=");

}
function getPick() {
    var results = (getFlavour() + getSize() + getCrust() + getTopping()) * getNumber();
    alert("You've ordered  " +
        getNumber("") +
        " pizza's,  " +
        "which amounts to ksh   " +
        results +
        "  Thanks for shopping with us "
    );
} 
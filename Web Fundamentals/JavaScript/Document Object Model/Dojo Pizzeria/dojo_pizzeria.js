// function pizzaOven (crustType, sauceType, cheeses, toppings) {
//     var pizza = {
//         crustType: crustType,
//         sauceType: sauceType,
//         cheeses: cheeses,
//         toppings: toppings
//     };
    
//     return pizza;
// }

// var s1 = pizzaOven("thin", "marinara", ["mozzarella"], ["pepperroni", "italian sausage", "salami"]);
// var s2 = pizzaOven("deep dish", "marinara", ["mozzarella"], ["pepperroni", "italian sausage"]);
// var s3 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
// var s4 = pizzaOven("thin", "marinara", ["mozzarella"], ["ham", "pineapples"]);
// console.log(s1);
// console.log(s2);
// console.log(s3);
// console.log(s4);


var crustType = [
    "thin",
    "deep dish",
    "hand tossed",
];

var sauceType = [
    "marinara",
    "pesto",
    "white garlic",
    "buffalo",
];

var cheeses = [
    "mozzarella", 
    "feta",
    "provolone",
    "gouda",
];

var toppings = [
    "pepperroni", 
    "italian sausage", 
    "salami",
    "mushrooms", 
    "olives", 
    "onions",
    "ham", 
    "pineapples",
];

function randomPizza(crustType, sauceType, cheeses, toppings) {
    var pickRandomCrust = Math.floor(Math.random() * crustType.length);
    var pickRandomSauce = Math.floor(Math.random() * sauceType.length);
    var pickRandomCheese = Math.floor(Math.random() * cheeses.length);
    var pickRandomToppings = Math.floor(Math.random() * toppings.length);

    var pizza = {
        crustType: crustType[pickRandomCrust],
        sauceType: sauceType[pickRandomSauce],
        cheeses: cheeses[pickRandomCheese],
        toppings: toppings[pickRandomToppings],
    };

    return pizza;
}

console.log("Your random pizza is: ", randomPizza(crustType, sauceType, cheeses, toppings));


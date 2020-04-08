let toppings = ['Cheese', 'Pepperoni', 'Garlic', 'Peppers'];

// return a string describing the pizza toppings
function pizza(){
    return "A delicious pizza with " + toppings[0] + " and " + toppings[1] + " and " + toppings[2] + " and " + toppings[3] + ".";
};

// return an array with all elements capitalized
let capitalize = toppings.map(function(yum) {
    return yum.toUpperCase();
});

// select the body element and style it with jQuery
$("body").css({
    "background-color": "red",
    "color": "blue" 
});

// add hyperlink
$("body").append("<a>New Link</a>");
// add href attribute to new hyperlink
$("a").attr('href', 'https://www.google.com/');

console.log(capitalize);
console.log(pizza());
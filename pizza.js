let toppings = ['Extra Cheese', 'Banana Peppers', 'Onions', 'Italian Sausage'];

// return a string describing the pizza toppings
function pizza(){
    console.log("I'd like to order a pizza with " + toppings.join(' and '))
};

pizza();

// return an array with all elements capitalized
let teams = ['Panthers', 'Hornets', 'Panthers', 'Capitals'];
let capitalize = teams.map(function(capitalizeEveryTeamInArray) {
    return capitalizeEveryTeamInArray.toUpperCase();
});

console.log(capitalize);

// select the body element and style it with jQuery
$("body").css({
    "background-color": "red",
    "color": "blue" 
});

// add hyperlink
$("body").append("<a id='link'>New Link</a>");
// add href attribute to new hyperlink
$("a").attr('href', 'https://www.google.com/');
// style 'a' tag with 'link' id
$('#link').css({
    "color": "white"
});
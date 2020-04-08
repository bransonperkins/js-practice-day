// print "Hello World" to the screen as an h1
$('body').prepend("<div class='header'><h1>Hello World!</h1></div>");

// ask user for their name and greet them with their name
// only greet Alice and Bob
function greeting() {
    var person = prompt("What is your name?", "Enter Your Name Here")

    if (person != 'Alice' || 'Bob') {
        alert("We only accept Alices and Bobs here. Get lost.");
        $('.header').append(person + " - There is a poser in our presence.");
    } else {
        alert("Hello " + person + ". Nice to meet you!");
        $('.header').append(person);
    }
};
greeting();

// add new div after name entry
// iterate through a for loop that adds up the sum of the iterations... iterations come from number supplied by user
$('.header').append("<div class='number'><h2>Sum Printed Below...</h2></div>");

function sumOfNumber(){
    let n = prompt("Give me a number between 1 and 10.", "Enter Number Here");
    let num = parseInt(n);
    let sum = 0;
    for (let i = 0; i <= num; i++){
        sum += i;
    };
    alert("A for loop iterated " + num + " times and returned a sum of " + sum);
    console.log(sum);
    $('.number').append("<p>You entered " + num + " and the sum of its iterations = " + sum + "</p>");
};
sumOfNumber();

// iterate through a for loop that adds up the sum of the iterations. it will only add up numbers that are multiples of 3 and 5... iterations come from number supplied by user
function threesAndFives(){
    let n = prompt("Give me a number between 1 and 100.", "Enter Number Here");
    let num = parseInt(n);
    let sum = 0;
    for (let i = 3; i <= num; i++){
        if ((i % 3 === 0) || (i % 5 === 0)){
            sum += i;
        }
    };
    alert("A for loop iterated " + num + " times and returned a sum of " + sum);
    console.log(sum);
    $('.number').append("<p>You entered " + num + " and the sum of its iterations = " + sum + ". This sum only included numbers that were divisible by 3 and 5.</p>");
};
threesAndFives();
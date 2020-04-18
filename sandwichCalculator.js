// create a sandwich calculator that tells you how many sandwiches you can make based off of how much bread and cheese you have
function sandwichCalculator(breadSlices, cheeseSlices){
    var sandwiches = Math.floor(breadSlices / 2);
    if ((breadSlices >= 2) && (cheeseSlices >= 1)) {
        console.log(sandwiches);
        return sandwiches;
    } else if ((cheeseSlices == 0) || (breadSlices < 2)) {
        console.log('No sandwiches for you.');
        return 0;
    }
}

// Test Cases
// Make sandwiches even when there is a surplus of cheese
sandwichCalculator(2,100); // 1
sandwichCalculator(6,3); // 3

// No sandwiches made when there is no cheese
sandwichCalculator(2,0); // 'No sandwiches for you'

// No sandwiches made when there is not enough bread to make a sandwich
sandwichCalculator(1,2); // 'No sandwiches for you'
// function creates a random number between 0 and 500, added Math.floor() so it will be an integer
function random() {
    return Math.floor(Math.random()*500);
}

// generate a jQuery object and use each() to iterate new css rules into every element inside the body
$('body *').each(function(){
    $(this).css({
        'position' : "absolute",
        'top' : random(),
        'left' : random()
    });
});
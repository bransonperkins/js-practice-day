// click handler that will change a paragraph text to red when clicked
$('p').click(function(event){
    $(event.target).css("color", "red");
});

$('input').on("keyup",function(event){
    if(event.keyCode == 13 && $('input').val() != "") {
        alert($('input').val());
        var task = $("<div class='text'></div>").text($('input').val());
    }
    
    task.append();
    $(".entries").append(task);
});

// Change h2 to "Over" when mouse hovers over the div
$('.hovertest').mouseenter(function(){
    $('h2', this).first().text("Over");
})
// Change h2 to "The mouse has left the div" when the mouse isn't hovering over the div
.mouseleave(function(){
    $('h2', this).first().text("The mouse has left the div");
});
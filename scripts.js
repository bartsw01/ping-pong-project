//Business Logic
var inputNumber = 0;
var inputNumberArray = [];
var pingpong = function(inputNumber){
var countTo = parseInt(inputNumber);
var currentNumber = 0;
var countBy = 1;
var outputArray = [];
  for (var currentNumber = countBy; currentNumber <= countTo; currentNumber += countBy){
    inputNumberArray.push(currentNumber);
  }
  inputNumberArray.forEach(function(arrayNumber){
    if (arrayNumber%5 === 0 && arrayNumber%3 === 0){
      arrayNumber = "ping-pong"
    } else if (arrayNumber%5 === 0){
      arrayNumber = "pong";
    } else if (arrayNumber%3 === 0){
      arrayNumber = "ping";
    } else {
      arrayNumber = arrayNumber;
    }
    outputArray.push(arrayNumber);
    // // $("ul").append("<li>" + arrayNumber + "</li>");
  });
    return outputArray;
};



// UI Logic
$(document).ready(function() {
  $(".pingpong-form").submit(function(event) {
    event.preventDefault();
    inputNumber = $("#userNumber").val();
    var listOutputItem = pingpong(inputNumber);
    $('ul').empty();
    $(".inputNumber").text(inputNumber);
    $("#result").show();
    listOutputItem.forEach(function(outputItem){
      $("ul").append("<li>" + outputItem + "</li>");
    });
  });
});

//Business Logic
var inputNumber = "";

var pingpong = function(inputNumber){
var inputNumberArray = [];
var currentNumber = 0;
var countTo = parseInt(inputNumber);
var countBy = 1;
var outputString = "";
var outputArray = [];
  for (var currentNumber = countBy; currentNumber <= countTo; currentNumber += countBy){
    inputNumberArray.push(currentNumber);
  }
  for(var index = 0; index < inputNumberArray.length; index += 1){
    arrayNumber = inputNumberArray[index];
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
  }
alert(inputNumber);
alert(inputNumberArray);
alert(inputNumberArray.length);
};



// UI Logic
$(document).ready(function() {
  $(".pingpong-form").submit(function(event) {
    inputNumber = $("#userNumber").val();
    $('ul').empty();
    $("ul").append("<li>" + arrayNumber + "<li>");
    event.preventDefault();




//Business Logic


      // $("ul").append("<li>" + arrayNumber + "<li>");
      // outputString = outputString + arrayNumber;
      // return outputArray;


    alert(outputArray);







  });
});

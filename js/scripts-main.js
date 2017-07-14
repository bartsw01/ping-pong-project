//Business Logic
var inputNumber = "";
var pingpong = function(inputNumber){
var countTo = parseInt(inputNumber);
var inputNumberArray = [];
var currentNumber = 0;
var countBy = 1;
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
  $("ul").append("<li>" + arrayNumber + "<li>");
  }
alert(inputNumber);
alert(inputNumberArray);
alert(inputNumberArray.length);
alert(outputArray);
};



// UI Logic
$(document).ready(function() {
  $(".pingpong-form").submit(function(event) {
    event.preventDefault();
    inputNumber = $("#userNumber").val();
    $('ul').empty();
    $(".inputNumber").text(inputNumber);
    $("#result").show();
    var listOutputItem = pingpong(inputNumber);
    // $("ul").append("<li>" + listOutputItem + "<li>");
  });
});

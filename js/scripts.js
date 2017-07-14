//Business Logic
// var inputNumber;
// alert(inputNumber);
//
// var inputNumberArray = [];
//
// // var numberator = inputNumberArray.push(inputNumber);
//
//
// // var currentNumber = 0;
// // var countTo = inputNumber;
// // var countBy = 1;
// // var numberator = function(inputNumber){
// //
// // for (var currentNumber = countBy; currentNumber <= countTo; currentNumber += countBy){
// //   inputNumberArray.push(currentNumber);
// // }
//
// alert(inputNumberArray);


// UI Logic
$(document).ready(function() {
  $(".pingpong-form").submit(function(event) {
    event.preventDefault();
    $('ul').empty();


    var inputNumber = $("#userNumber").val();
    alert(inputNumber)
    var inputNumberArray = [];
    var currentNumber = 0;
    var countTo = parseInt(inputNumber);
    var countBy = 1;
    var outputString = "";
    for (var currentNumber = countBy; currentNumber <= countTo; currentNumber += countBy){
      inputNumberArray.push(currentNumber);
    }
    alert(inputNumberArray);
    alert(inputNumberArray.length);
    alert(inputNumberArray[2]);
    for(var index = 0; index < inputNumberArray.length; index += 1){
      arrayNumber = inputNumberArray[index];

      if (arrayNumber === 3){
        arrayNumber = "ping";
      } else {
        arrayNumber = arrayNumber
      }
    outputString = outputString + arrayNumber;
    }
    alert(outputString);



  });
});

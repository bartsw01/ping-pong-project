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

    var inputNumber = $("#userNumber").val();
    alert(inputNumber)
    var inputNumberArray = [];
    var currentNumber = 0;
    var countTo = parseInt(inputNumber);
    var countBy = 1;
    for (var currentNumber = countBy; currentNumber <= countTo; currentNumber += countBy){
      inputNumberArray.push(currentNumber);
    }
    alert(inputNumberArray);
    event.preventDefault();
    

  });
});

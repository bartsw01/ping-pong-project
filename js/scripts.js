//Business Logic



// UI Logic
$(document).ready(function() {
  $(".pingpong-form").submit(function(event) {
    event.preventDefault();
    $('ul').empty();

    // outputArray.forEach(function(outPutListItem){
    //   $("ul").append("<li>" + outPutListItem + "<li>");
    // }

    var inputNumber = $("#userNumber").val();
    alert(inputNumber)
    var inputNumberArray = [];
    var currentNumber = 0;
    var countTo = parseInt(inputNumber);
    var countBy = 1;
    var outputString = "";
    var outputArray = [];
    for (var currentNumber = countBy; currentNumber <= countTo; currentNumber += countBy){
      inputNumberArray.push(currentNumber);
    }
    alert(inputNumberArray);
    alert(inputNumberArray.length);
    alert(inputNumberArray[2]);
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
      $("ul").append("<li>" + arrayNumber + "<li>");
      // outputString = outputString + arrayNumber;
      // return outputArray;


    }
    // alert(outputString);
    // alert(outputArray);



    // alert(outputArray);



  });
});

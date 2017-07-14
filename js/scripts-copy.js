//Business Logic
var inputNumber;
var inputNumberArray = [];
// inputNumberArray.push($("input#movie").val());




















// UI Logic
$(document).ready(function() {
  $(".pingpong-form").submit(function(event) {
    event.preventDefault();
    inputNumber = $("#userNumber").val();
    // alert(inputNumber);

    $("#result").text(inputNumber);
    $("#result").show(inputNumber);

  });
});

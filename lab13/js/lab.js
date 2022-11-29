/**
 * Author: Daniel Shim
 * Created: 11.14.2022
 *
 * (c) Copyright by Daniel Shim
 **/

//create function

function fizzBuzz() {
  for (var num = 0; num < 200; num++) {
    var out = "";
    if (num % 3 == 0) {
      out += "Fizz";
    }
    if (num % 5 == 0) {
      out += "Buzz";
    }
    if (num % 7 == 0) {
      out += "Boom";
    }
    if (out != "") {
      out = " - " + out + "!"
    }
    $("#output").append("<p>" + num.toString() + out + "</p>");
  }
}

//add event listener

$("#submit").click(function() {
  fizzBuzz();
});

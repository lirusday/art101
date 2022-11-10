/**
 * Author: Daniel Shim
 * Created: 11.8.2022
 *
 * (c) Copyright by Daniel Shim
 **/

//create sortingHat
function sortingHat(str) {
  var length = str.length;
  var mod = length % 4;
  if (mod == 0) {
    return "Gryffindor";
  } else if (mod == 1) {
    return "Ravenclaw";
  } else if (mod == 2) {
    return "Slytherin";
  } else if (mod == 3) {
    return "Hufflepuff";
  }
}

//create event listener
$("#button").click(function() {
  var name = $("#input").val();
  var house = sortingHat(name);
  $("#output").append("<p>The Sorting Hat has sorted you into " + house + "</p>");
});

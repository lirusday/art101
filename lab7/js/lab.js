/**
 * Author: Daniel Shim
 * Created: 10.21.2022
 *
 * (c) Copyright by Daniel Shim
 **/

//Function

function sortUserName() {
  //ask for user name
  var userName = window.prompt("Enter your name.");
  //split users name, sort the letters, and join them as one string
  return userName.toLower().split('').sort().join('');
}

//Output
document.writeln("Your name sorted: ", sortUserName(), "</br>");

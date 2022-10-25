/**
 * Author: Daniel Shim
 * Created: 10.21.2022
 *
 * (c) Copyright by Daniel Shim
 **/

//Function

function sortUserName() {
  var userName = window.prompt("Enter your name.");
  console.log("userName =", userName);
  //split string into letters in array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  //sort array
  var arraySort = nameArray.sort();
  console.log("arraySort =", arraySort);
  //join array
  var nameJoin = arraySort.join('');
  console.log("nameJoin =", nameJoin);
  //return sorted name
  return nameJoin;
}

//Output
document.writeln("Your name sorted: ", sortUserName(), "</br>");

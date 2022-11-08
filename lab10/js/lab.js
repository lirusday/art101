/**
 * Author: Daniel Shim
 * Created: 11.3.2022
 *
 * (c) Copyright by Daniel Shim
 **/

 //Function

 function sortUserName() {
   var userName = document.getElementById("user-name").value;
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
   document.getElementById("output").innerHTML = nameJoin;
 }

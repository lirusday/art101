/**
 * Author: Daniel Shim
 * Created: 10.27.2022
 *
 * (c) Copyright by Daniel Shim
 **/

//define variables
var outputEl = document.getElementById("output");
var new1El = document.createElement("p");

//change new1El attribute
new1El.innerHTML = "This is a new paragraph element.";

//define new2El
var new2El = document.createElement("p");

//change new2El attribute
new2El.innerHTML = "This is another new paragraph element.";

//append elements
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

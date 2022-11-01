/**
 * Author: Daniel Shim
 * Created: 11.1.2022
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

//TASK X 2: use of doctype
var new3El = document.createElement("p");
new3El.innerHTML = "This document type is: " + document.doctype;
outputEl.appendChild(new3El);

//TASK X 3: use of domain
var new4El = document.createElement("p");
new4El.innerHTML = "This domain name is: " + document.domain;
outputEl.appendChild(new4El);

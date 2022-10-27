/**
 * Author: Daniel Shim
 * Created: 10.27.2022
 *
 * (c) Copyright by Daniel Shim
 **/

function isOdd(x) {
  return (x % 2 == 1);
}

// test function

console.log("Is 1 odd? ", isOdd(1));
console.log("Is 2 odd? ", isOdd(2));

array = [100, 81, 4, 16, 42, 144, 10000]
console.log("My array", array);

var result = array.map(isOdd);
console.log("Test function on array: ", result);

var result = array.map(function(x) {
  return x / 2;
})

console.log("Array values divided by two:", result);

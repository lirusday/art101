/**
 * Author: Daniel Shim
 * Created: 10.21.2022
 *
 * (c) Copyright by Daniel Shim
 **/

// Variables

myTransport = ["car", "bicycle", "bus"];
myMainRide = {
  make: "Volkswagen",
  model: "Beetle",
  color: "Silver",
  year: 2017,
  age: function() {
    return 2022 - year;
  }
}

// Output

document.writeln("Getting around: " + myTransport + "<br>");
document.writeln("My Main Ride: <pre>", JSON.stringify(myMainRide, null, '\t'), "</pre>");

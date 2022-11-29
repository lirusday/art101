/**
 * Author: Daniel Shim
 * Created: 11.29.2022
 *
 * (c) Copyright by Daniel Shim
 **/

//Functions

$("#ajax").click(function() {
  $.ajax({
    url: "https://yesno.wtf/api",
    type: "GET",
    data: { get_param: 'value' },
    dataType: "json",
    success: function(data) {
      $("#output").append(JSON.stringify(data));
    }
  })
});

$.getJSON("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY", function(data) {
  $("#output").append(JSON.stringify(data));
});

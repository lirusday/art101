/**
 * Author: Daniel Shim
 * Created: 11.29.2022
 *
 * (c) Copyright by Daniel Shim
 **/

//Variables

var comicObj = {};

//Functions
function getAndPutData(num) {
  $.ajax({
      url: "https://xkcd.com/" + num + "/info.0.json",
      type: "GET",
      data: { get_param: 'value' },
      dataType: "json",
      success: function(data) {
        Object.assign(comicObj, data);
        $("#output").append("<h1>" + comicObj.title + "</h1>");
        $("#output").append("<img src=\"" + comicObj.img + "\" alt=\""+ comicObj.alt +"\">");
      }
  })
}

$("#prev").click(function() {
  $("#output").empty();
  getAndPutData(comicObj.num - 1);
});

$("#next").click(function() {
  $("#output").empty();
  getAndPutData(comicObj.num + 1);
});

getAndPutData(1);

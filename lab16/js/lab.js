/**
 * Author: Daniel Shim
 * Created: 11.29.2022
 *
 * (c) Copyright by Daniel Shim
 **/

//Functions

$.ajax({
    url: "https://xkcd.com/info.0.json",
    type: "GET",
    data: { get_param: 'value' },
    dataType: "json",
    success: function(comicObj) {
      $("#output").append("<h1>" + comicObj.title + "</h1>");
      $("#output").append("<img src=\"" + comicObj.img + "\" alt=\""+ comicObj.alt +"\">");
    }
})

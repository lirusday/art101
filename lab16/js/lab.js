/**
 * Author: Daniel Shim
 * Created: 11.29.2022
 *
 * (c) Copyright by Daniel Shim
 **/

//Variables

var comicObj;

//Functions

$.ajax({
    url: "https://xkcd.com/info.0.json",
    type: "GET",
    data: { get_param: 'value' },
    dataType: "json",
    success: function(data) {
        comicObj = data;
    }
})

$("#output").append("<h1>" + comicObj.title + "</h1>");
$("#output").append("<img src=\"" + comicObj.img + "\" alt=\""+ comicObj.alt +"\">");

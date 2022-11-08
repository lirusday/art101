/**
 * Author: Daniel Shim
 * Created: 11.8.2022
 *
 * (c) Copyright by Daniel Shim
 **/

//create buttons using jquery

$('#challenge').append(
  $(document.createElement('button')).prop({
    type: 'button',
    id: 'challenge',
    innerHTML: 'Challenge'
 	})
);

$('#problems').append(
  $(document.createElement('button')).prop({
    type: 'button',
    id: 'problems',
    innerHTML: 'Problems'
 	})
);

$('#results').append(
  $(document.createElement('button')).prop({
    type: 'button',
    id: 'results',
    innerHTML: 'Results'
 	})
);

//add event listener

$('#challenge').on('click', '#challenge', function() {
  $('#challenge').toggleClass('special');
});

$('#problems').on('click', '#problems', function() {
  $('#problems').toggleClass('special');
});

$('#results').on('click', '#results', function() {
  $('#results').toggleClass('special');
});

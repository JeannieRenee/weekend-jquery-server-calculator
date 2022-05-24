console.log('client.js') 

$(document).ready(onReady);

function onReady() {
    //button click listener
    $(document).on('click', '#submit', submit);
    $(document).on('click', '#clear', clearButton);
    $(document).on('click', '#submit', getFromServer);
    getFromServer()
}

// function to get data from the server 
function getFromServer() {
    $.ajax({
        method: 'GET',
        url: '/maths',
    }).then(function(array) {
        console.log("SUCCESS!");
        displayMaths(array)
    }).catch(function(response) {
        // notify the user
        console.log('Request failed.');
      }
    );
}

// display results
function displayMaths(array) {
    $('.output').empty();
  
    for (thing of array) {
      $('.output').append(`<li> 
      ${thing.number1} 
      ${thing.operator} 
      ${thing.number2} 
      =
      ${thing.result} 
      </li>`); 
    }
    $('.results').empty();
    $('.results').append(`<p> 
      ${thing.result} 
      </p>`); 
}

// creates object{newMathObject} and sends it to the server
function submit(event) {
    event.preventDefault();
    //sends to server
    $.ajax({
        method: 'POST',
        url: '/maths',
        data: {
            number1: $('#first-input').val(),
            operator: $('#operator').val(),
            number2: $('#second-input').val(),
            result: null
            }
        
    }).then(function(response) {
        console.log('post success');
    }).catch(function(response) {
        console.log("something is wrong");
    });
     $('input').val('');
    } 

// clear inputs 
function clearButton() {
    $('#first-input').val('');
    $('#operator').val('');
    $('#second-input').val('')
}
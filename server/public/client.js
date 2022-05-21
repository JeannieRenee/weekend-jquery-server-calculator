console.log('client.js') 

$(document).ready(onReady);

function onReady() {
    //button click listener
    $(document).on('click', '#submit', submit);
    $(document).on('click', '#clearButton', clearButton);
    getFromServer()
}

// function to get data from the server 
function getFromServer() {
    $.ajax({
        method: 'GET',
        url: '/maths',
    }).then(function(response) {
        console.log("SUCCESS!");
        displayResult(response)
    }).catch(function(response) {
        // notify the user
        alert('Request failed. Try again later.');
      }
    );
}

// display results 
function displayResult(response) {
    $('#output').empty();
  
    for (let thing of response) {
      $('#output').append(response.thing);
    }
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
            number2: $('#second-input').val()
            }
        
    }).then(function(response) {
        console.log('post success');
    }).catch(function(response) {
        console.log("something is wrong");
    });
} 

// clear inputs 
function clearButton() {
    $('#first-input').val('');
    $('#operator').val('');
    $('#second-input').val('')
}
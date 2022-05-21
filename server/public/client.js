console.log('client.js') 

$(document).ready(onReady);

function onReady() {
    //button click listener
    $(document).on('click', '#submit', submitEquation);
    $(document).on('click', '#clear', clearButton)

}

// clear inputs 
function clearButton() {
    // clear inputs
    $('#first-input').val('');
    $('#operator').val('');
    $('#second-input').val('')
}

// creates object{newMathObject} and pushes to array[maths]
let maths=[]; 
function submitEquation(num1, operator, num2) {
    //get value 
    const newMathObject = {
      num1: $('#first-input').val(),
      operator: $('#operator').val(),
      num2: $('#second-input').val()
    };
    maths.push(newMathObject);
    
    //run arithmetic 
    arithmetic(newMathObject);

// Arithmetic functions below 
    function arithmetic() {
        let number1 = newMathObject.num1
        let number2 = newMathObject.num2

        if (newMathObject.operator === '+') {
        result = (parseInt(number1)) + (parseInt(number2))
        $('#output').append(`<li>${newMathObject.num1} ${newMathObject.operator} ${newMathObject.num2} = ${result} </li>`);
        displayResults()
        } else if (newMathObject.operator === '-') {
        result = (parseInt(number1)) - (parseInt(number2))
        $('#output').append(`<li>${newMathObject.num1} ${newMathObject.operator} ${newMathObject.num2} = ${result} </li>`);
        displayResults()
        } else if (newMathObject.operator === '*') {
        result = (parseInt(number1)) * (parseInt(number2))
        $('#output').append(`<li>${newMathObject.num1} ${newMathObject.operator} ${newMathObject.num2} = ${result} </li>`);
        displayResults()
        } else if (newMathObject.operator === '/') {
        result = (parseInt(number1)) / (parseInt(number2))
        $('#output').append(`<li>${newMathObject.num1} ${newMathObject.operator} ${newMathObject.num2} = ${result} </li>`);
        displayResults()
        }
        return
    }

    function displayResults(){
        let value = $( '.results' );
        value.empty();     
        value.append(`<p> ${result} </p>`);
    } 
} 

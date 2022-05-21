// Require express + bodyparser 
const express = require('express');
const bodyParser = require("body-parser");

// require the modules.js data
const maths = require('./modules/modules')

// Create an instance of express by calling the function returned above - gives us an object
const app = express();
const port = 5050;

// express static file serving - public is the folder name
app.use(express.static('server/public'));

// Plug body-parser into our express app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Start up our server
app.listen(port, () => {
  console.log('listening on port', port);
});

// create /maths path
app.get('/maths', function(req, res){
  res.send(maths);
});

// catch what the client sent
app.post('/maths', (req, res) => {
  // req.body is the data sent from the client
  console.log('got a post request', req.body);

  // Grab the data from the request body and run calculations
  arithmetic(req.body);
  res.send()
});

//Arithmetic function 
function arithmetic(newMathObject) {
  let number1 = newMathObject.number1;
  let operator = newMathObject.operator;
  let number2 = newMathObject.number2;
  let result;
    if (operator === '+') {
      result = (parseInt(number1)) + (parseInt(number2))

    } else if (operator === '-') {
      result = (parseInt(number1)) - (parseInt(number2));
      console.log(result); 
    } else if (operator === '*') {
      result = (parseInt(number1)) * (parseInt(number2));
      console.log(result);
    } else if (operator === '/') {
      result = (parseInt(number1)) / (parseInt(number2));
      console.log(result); 
    } else {
      console.log ('its mathing but idk');
    }
      maths.push(newMathObject);
      console.log(result); 
      return 
  }



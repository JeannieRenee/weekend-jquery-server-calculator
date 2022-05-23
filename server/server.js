// Require express + bodyparser 
const express = require('express');
const bodyParser = require("body-parser");

// require the modules.js data
const maths = require('./modules/modules')

// Create an instance of express by calling the function returned above - gives us an object
const app = express();
const PORT = process.env.PORT || 5000;

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
  let result = newMathObject.result
    if (operator === '+') {
      newMathObject.result = (parseInt(number1)) + (parseInt(number2))
    } else if (operator === '-') {
      newMathObject.result = (parseInt(number1)) - (parseInt(number2));
    } else if (operator === '*') {
      newMathObject.result = (parseInt(number1)) * (parseInt(number2));
    } else if (operator === '/') {
      newMathObject.result = (parseInt(number1)) / (parseInt(number2));
    } else if (number1 === '' || number2 === ''|| operator === '') {
      // i trie alert boxes but they dont work server side
      console.log("😵‍💫 Check input and try again 😵‍💫");
      return
    } else {
      console.log("😵‍💫 Check input and try again 😵‍💫");
      return
    }
      maths.push(newMathObject);
      console.log(newMathObject.result); 
      return 
  }



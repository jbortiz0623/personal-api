// require express and other modules
const
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser')
    db = require('./models')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())

// serve static files from public folder
app.use(express.static(__dirname + '/public'));


//Run server and run on port 3000
app.listen(process.env.PORT || 3000, () => {
  console.log('Server running on http://localhost:3000');
  
});

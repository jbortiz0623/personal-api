// require express and other modules
const express = require('express'),
const app = express(),
const bodyParser = require('body-parser')
const db = require('./models')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

// ROUTES

app.get("/", (request, response) => {
  response.sendFile(__dirname+'/views/');
});



app.get('/api/colony/', (req, res) => {
  db.Colony.find({ })
  .populate('capital')
    .exec((err, colonies) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json(colonies);
    });
});
//Get one Colony
app.get('/api/colonies/:id', (req, res) => {
  console.log('colonies show', req.params);
  db.Colony.findById(re.params.id).populate('capital').exec((err, books) => {
    if(err) { console.log('index error: '+err); res.sendStatus(500); } 
    res.json(colonies[i]);
  })
});

//Create new Colony
app.post('/api/colonies', (req,res) => {
  let newColony = new db.Colony({
    title: req.body.title,
    capital: req.body.capital,
    yearDate: req.body.yearDate,
  });
    db.Capital.findOne({city: req.body.capital},(err, capital) => {
      console.log(capital);
      if (capital==null) { 
        capital = new db.Capital({city: req.body.capital, slave: true});
        capital.save((err,newCapital)=>{
          if (err) {console.log("create new capital error: " + err); } 
        });
      }
      newColony.capital = capital;
      // add newColony to database
    newColony.save((err, colony)=>{
      if (err) { console.log("create error: " + err); }
      console.log("created", colony.title);
      res.json(colony);
      });
  });
});

//update Colony
app.put('/api/colonies/:id', (req, res) => {
  let colonyId = req.params.id;
  let updateColony = req.body;

  db.Colony.findOneAndUpdate(
      { _id: colonyId }, // search condition
      updateColony, // new content you want to update
      {new:true}, // you want to receive the new object
      (err, updatedColony) => { // callback
      if(err) { return console.log(err) }
      res.json(updatedColony);
  });
});

// delete colony
app.delete('/api/colonies/:id', (req, res) => {
  let colonyId = req.params.id;
  db.Colony.deleteOne(
      { _id: colonyId },
      (err, deletedColony) => {
          if(err) { return console.log(err) }
          res.json(deletedColony);
  });
});
//Run server and run on port 3000
app.listen(process.env.PORT || 3000, () => {
  console.log('Server running on http://localhost:3000');
  
});

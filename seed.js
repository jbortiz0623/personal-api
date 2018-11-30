var db = require('./models');

var colonies_list = [
  {
    title: "Deleware",
    capital: "Dover",
    yearDate: "1775"
  },
  {
    title: "Virginia",
    capital: "Richmond",
    yearDate: "1776"
  },
  {
    title: "Rhode Island",
    capital: "Providence",
    yearDate: "1777"
  },
  {
    title: "New Jersey",
    capital: "Trenton",
    yearDate: "1778"
  },
  {
    title: "Pennsylvania",
    capital: "Harrisburg",
    yearDate: "1779"
  },
  {
    title: "North Carolina",
    capital: "Raleigh",
    yearDate: "1780"
  },
  {
    title: "Georgia",
    capital: "Atlanta",
    yearDate: "1781"
  },
  {
    title: "Connecticut",
    capital: "Hartford",
    yearDate: "1782"
  }
];

var capitals_list = [
  {
    city: "Dover",
    slave: false
  },
  {
    city: "Richmond",
    slave: false
  },
  {
    city: "Providence",
    slave: false
  },
  {
    city: "Trenton",
    slave: false
  },
  {
    city: "Harrisburg",
    slave: true
  },
  {
    city: "Raleigh",
    slave: true
  },
  {
    city: "Atlanta",
    slave: false
  },
  {
    city: "Hartford",
    slave: false
  }
];

db.Capital.deleteMany({}, function(err, capitals) {
    console.log('removed all capitals');
    db.Capital.create(capitals_list, function(err, capitals){
      if (err) {
        console.log(err);
        return;
      }
      console.log('recreated all capitals');
      console.log("created", capitals.length, "capitals");
  
  
      db.Colony.deleteMany({}, function(err, colonies){
        console.log('removed all colonies');
        colonies_list.forEach(function (colonyData) {
          var colony = new db.Colony({
            title: colonyData.title,
            yearDate: colonyData.yearDate,
            capital: colonyData.capital
          });
          db.Capital.findOne({city: colonyData.capital}, function (err, foundCapital) {
            if (err) {
              console.log(err);
              return;
            }
            colony.capital = foundCapital;
            colony.save(function(err, savedColony){
              if (err) {
                console.log(err);
              }
              console.log('saved '+savedColony.title+ ' holds the capital of ');
            });
          });
        });
      });
  
    });
  });
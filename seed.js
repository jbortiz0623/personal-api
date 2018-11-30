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
    city: "Harrisburg",
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
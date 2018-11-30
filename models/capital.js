    // models/author.js
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    
    var capitalSchema = new Schema({
      city: String,
      age: Number
    });

    var Capital = mongoose.model('Capital', capitalSchema);
    module.exports = Capital;
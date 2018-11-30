const mongoose = require('mongoose');
Schema = mongoose.Schema;

const ColonySchema = new Schema({
    title: String,
    capital: {
      type: Schema.Types.ObjectId,
      ref: 'Capital'
    },
    yearDate: String
  });

const Colony = mongoose.model('Colony', ColonySchema);

module.exports = Colony;
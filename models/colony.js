const mongoose = require('mongoose');
Schema = mongoose.Schema;

const ColonySchema = new Schema({
    title: {
        type: String,
        default: ""
      },
      yearDate: {
        type: String,
        default: ""
      }
    });

const Colony = mongoose.model('Colony', ColonySchema);

module.exports = Colony;
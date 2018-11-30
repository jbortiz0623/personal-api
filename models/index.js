const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/personal-api', { useNewUrlParser: true } );

const Colony = require('./colony');
const Capital = require('./capital');
exports.Colony = Colony;
exports.Capital = Capital;

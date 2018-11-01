const mongoose = require('mongoose');
mongoose.Promise = global.Promise; // this code solves a deprication warning for Mongoose mPromise
mongoose.connect('mongodb://localhost/fec', { useNewUrlParser: true });
let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongo DB is running');
});

const photoSchema = mongoose.Schema({
  _id: Number,
  propertyId: Number,
  photoURL: String
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;

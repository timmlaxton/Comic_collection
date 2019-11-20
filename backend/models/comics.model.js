const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const comicsSchema = new Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  issue: { type: Number, required: true },
  publisher: { type: String, required: true },

});

const Comics = mongoose.model('Comic', comicsSchema);

module.exports = Comics;

const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    maxlength: 100,
    required: true,
    unique: true
  },
  director: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  plot: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  }
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;

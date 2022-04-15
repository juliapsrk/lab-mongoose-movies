const mongoose = require('mongoose');

const celebritySchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 100,
    required: true,
    unique: true
  },
  occupation: {
    type: String,
    required: true
  },
  catchPhrase: {
    type: String,
    required: true
  }
});

const Celebrity = mongoose.model('Celebrity', celebritySchema);

module.exports = Celebrity;

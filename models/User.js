const { Schema, model } = require('mongoose');

const schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  games: {
    type: Number,
  },
  totalTimePlayed: {
    type: Number,
  },
  topScore: {
    type: Number,
  },
  totalScore: {
    type: Number,
  },
  isAdmin: {
    type: Boolean,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model('User', schema);

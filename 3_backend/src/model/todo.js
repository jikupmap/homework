const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    title: String,
    category: Number,
    isDone: Boolean
  }
);
module.exports = mongoose.model('Todo', schema);

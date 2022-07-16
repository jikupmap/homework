const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    title: String,
    category: Number,
    isDone: Boolean
  },
  { timestamps: true }
);
module.exports = mongoose.model('Todo', schema);

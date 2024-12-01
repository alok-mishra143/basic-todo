const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Todo = new Schema({
  title: String,
  description: String,
});



const mongoose = require("mongoose");

require("dotenv").config();

const Schema = mongoose.Schema;

const url = process.env.MONGO_URI || " ";

mongoose.connect(url);

const TodoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const Todo = mongoose.model("todos", TodoSchema);

module.exports = {
  Todo,
};

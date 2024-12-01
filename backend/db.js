const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const url = process.env.MONGO - URI || " ";

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

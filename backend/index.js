const express = require("express");
const { CreateTodo, UpdateTodo } = require("./type");
const app = express();
const { Todo } = require("./db");
const cors = require("cors");
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.post("/todos", async function (req, res) {
  try {
    const payload = req.body;
    const parsepayload = CreateTodo.safeParse(payload);

    if (!parsepayload.success) {
      console.error("Validation error:", parsepayload.error);
      res.status(400).json({
        msg: "Invalid input",
        error: parsepayload.error,
      });
      return;
    }

    // code to put in mongodb
    await Todo.create({
      title: payload.title,
      description: payload.description,
      completed: false,
    });
    res.json({
      msg: "Todo created",
    });
  } catch (error) {
    console.error("Error creating todo:", error);
    res.status(500).json({
      msg: "Internal Server Error",
    });
  }
});

app.get("/todo", async function (req, res) {
  try {
    const todos = await Todo.find();

    res.json({
      todos,
    });
  } catch (error) {
    console.error("Error fetching todos:", error);
    res.status(500).json({
      msg: "Internal Server Error",
    });
  }
});

app.put("/todo-done", async function (req, res) {
  try {
    const payload = req.body;
    const parsepayload = UpdateTodo.safeParse(payload);

    if (!parsepayload.success) {
      console.error("Validation error:", parsepayload.error);
      res.status(400).json({
        msg: "Invalid input",
        error: parsepayload.error,
      });
      return;
    }

    await Todo.updateOne(
      {
        _id: req.body.id,
      },
      {
        completed: true,
      }
    );

    res.json({
      msg: "Todo updated",
    });
  } catch (error) {
    console.error("Error updating todo:", error);
    res.status(500).json({
      msg: "Internal Server Error",
    });
  }
});

app.listen(3000);

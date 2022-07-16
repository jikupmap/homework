const express = require('express');
const router = express.Router();
const Todo = require('./model.todo.js');

router.get('/', (req, res) => {
    res.json({ message: `Server is running on port ${PORT}` });
});
router.get('/todos', (req, res) => {
  try {
    const todos = await Todo.find({ id: req.params.id });
    res.render('data', { todos: todos })
  } catch (err) {
    console.error(err)
    res.status(500).send('Something broke!');
  }
});
router.get('/todos/:id', async (req, res) => {
  try {
    const todo = await Todo.find({ id: req.params.id });
    res.render('data', { todo: todo })
  } catch (err) {
    console.error(err)
    res.status(500).send('Something broke!');
  }
});
module.exports = router;
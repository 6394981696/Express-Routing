const express = require('express');
const router = express.Router();

let todos = [];
router.post('/', (req, res) => {
  const todo = req.body;
  todos.push(todo);
  res.status(201).send('Todo created');
});
router.get('/', (req, res) => {
  res.status(200).json(todos);
});
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const updatedTodo = req.body;
  todos = todos.map(todo => todo.id === parseInt(id) ? updatedTodo : todo);
  res.send(`Todo with ID ${id} updated`);
});
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  todos = todos.filter(todo => todo.id !== parseInt(id));
  res.send(`Todo with ID ${id} deleted`);
});

module.exports = router;

const express = require('express');
const router = express.Router();

let users = [];
router.post('/', (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).send('User created');
});
router.get('/', (req, res) => {
  res.status(200).json(users);
});
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const updatedUser = req.body;
  users = users.map(user => user.id === parseInt(id) ? updatedUser : user);
  res.send(`User with ID ${id} updated`);
});
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  users = users.filter(user => user.id !== parseInt(id));
  res.send(`User with ID ${id} deleted`);
});

module.exports = router;

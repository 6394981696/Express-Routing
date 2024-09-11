const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());
const userRouter = require('./routes/userRoutes');
const todoRouter = require('./routes/todoRoutes');
app.use('/users', userRouter);
app.use('/todos', todoRouter);
// app.get('/', (req, res) => {
//   res.send('Welcome to the Express server!');
// });
app.get('/', (req, res) => {
    res.send('Welcome to the Express server!');
  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

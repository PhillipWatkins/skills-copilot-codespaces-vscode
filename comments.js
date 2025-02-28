// Create web server
// Create a route that accepts POST requests
// Create a new comment and store it in memory
// Respond with a 201 status code and the comment

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const comments = [];
let nextId = 1;

app.post('/comments', (req, res) => {
  const newComment = req.body;
  newComment.id = nextId;
  comments.push(newComment);
  nextId += 1;
  res.status(201).json(newComment);
});

app.listen(4001, () => {
  console.log('Server is listening on port 4001');
});
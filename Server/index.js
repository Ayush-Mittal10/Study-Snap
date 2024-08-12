const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const port = process.env.PORT || 5000
const db = mysql.createConnection({
  host: 'localhost',
  user: process.env.USER,
  password: process.env.PWD,
  database: 'flashcard_db'
});

db.connect();

app.get('/api/flashcards', (req, res) => {
  db.query('SELECT * FROM flashcards', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

app.post('/api/flashcards', (req, res) => {
  const { question, answer } = req.body;
  db.query('INSERT INTO flashcards (question, answer) VALUES (?, ?)', [question, answer], (err) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ question, answer });
  });
});

app.delete('/api/flashcards/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM flashcards WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).json(err);
    res.status(204).end();
  });
});

app.listen(port, () => console.log(`Server running on port: ${port}`));

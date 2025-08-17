const express = require('express');
const router = express.Router();
const db = require('./db');
const bodyParser = require('body-parser');

router.use(bodyParser.json());

// Get all expenses
router.get('/expenses', (req, res) => {
  db.all('SELECT * FROM expenses', (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Add expense
router.post('/expenses', (req, res) => {
  const { name, amount, category } = req.body;
  db.run(
    'INSERT INTO expenses (name, amount, category) VALUES (?, ?, ?)',
    [name, amount, category],
    function(err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID });
    }
  );
});

// Delete expense
router.delete('/expenses/:id', (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM expenses WHERE id = ?', [id], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ deletedID: id });
  });
});

module.exports = router;


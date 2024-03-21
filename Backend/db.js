const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(':memory:'); // Use in-memory DB for simplicity

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS expenses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    amount REAL NOT NULL,
    category TEXT NOT NULL
  )`);
});

module.exports = db;

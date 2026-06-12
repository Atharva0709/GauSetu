const Database = require('better-sqlite3');
const path = require('path');

const dbPath = process.env.VERCEL ? '/tmp/livestock.db' : path.join(__dirname, 'livestock.db');


let db;

const getDatabase = () => {
  if (!db) {
    db = new Database(dbPath);
    db.pragma('foreign_keys = ON');
    console.log('✅ SQLite database connected');
  }
  return db;
};

module.exports = { getDatabase };

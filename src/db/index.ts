import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('nsuns.db');

export function initDB() {
    db.execSync(`
        CREATE TABLE IF NOT EXISTS lifts (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          trainingMax REAL NOT NULL
        );

        CREATE TABLE IF NOT EXISTS programs (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS days (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          programId INTEGER NOT NULL,
          name TEXT NOT NULL,
          dayOrder INTEGER NOT NULL,
          FOREIGN KEY (programId) REFERENCES programs(id) 
        ); 
        
        CREATE TABLE IF NOT EXISTS exercises (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          dayId INTEGER NOT NULL,
          name TEXT NOT NULL,
          type TEXT NOT NULL,
          exerciseOrder INTEGER NOT NULL,
          blockId INTEGER,
          FOREIGN KEY (dayId) REFERENCES days(id)
        ); 
    `);
}

export { db }
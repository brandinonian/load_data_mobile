import * as SQLite from 'expo-sqlite/next';

const db = await SQLite.openDatabaseAsync('load_data');

// you can put as many queries as you like here
// doesn't escape parameters
export async function init_db() {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS loads (
      id INTEGER PRIMARY KEY NOT NULL,
      date TEXT,
      reference_id TEXT,
      description TEXT,
      firearm TEXT,
      firearm_id TEXT,
      velocity_data BLOB
    );
`);
}
import * as SQLite from 'expo-sqlite/next';

const db = await SQLite.openDatabaseAsync('load_data');


// new witchcraft, experimental
export async function get_preview_data() {
  await db.getAllAsync('SELECT id, date, description FROM loads ORDER BY id');
}

export async function get_load(id) {
  await db.getFirstAsync(`SELECT * from laods WHERE id = ${id}`);
}

export async function add_load(date, reference_id, description, firearm, firearm_id, velocity_data) {
  await db.runAsync(`INSERT INTO loads (date, reference_id, description, firearm, firearm_id, velocity_data) VALUES (${date}, ${reference_id}, ${description}, ${firearm}, ${firearm_id}, ${velocity_data})`);
}

export async function delete_load(id) {
  await db.runAsync(`DELETE FROM loads WHERE id = ${id}`);
}

// TODO double check this guy
export async function update_load(id, date, reference_id, description, firearm, firearm_id, velocity_data) {
  await db.runAsync(`UPDATE loads (date, reference_id, description, firearm, firearm_id) VALUES (${date}, ${reference_id}, ${description}, ${firearm}, ${firearm_id}, ${velocity_data}) WHERE id = ${id}`);
}
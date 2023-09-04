import Datastore from "nedb";

const db = new Datastore('./src/services/nedb/collections/machina/machinas.db');

db.loadDatabase();

export default db;
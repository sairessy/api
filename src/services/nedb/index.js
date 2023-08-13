import Datastore from "nedb";

const db = new Datastore('./src/services/nedb/machinas.db');

db.loadDatabase()

export default db;
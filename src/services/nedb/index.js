import Datastore from "nedb";
import Machina from "../../models/machina/Machina.js";

const db = new Datastore('./src/services/nedb/machinas.db');

db.loadDatabase()

// db.insert(new Machina())

export default db;
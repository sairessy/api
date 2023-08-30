import Datastore from "nedb";

const db = new Datastore('./src/services/nedb/collections/user/users.db');

db.loadDatabase();

export default db;
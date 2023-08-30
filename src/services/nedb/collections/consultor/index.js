import Datastore from "nedb";

const db_consultores = new Datastore('./src/services/nedb/collections/consultor/consultores.db');

db_consultores.loadDatabase();

export default db_consultores;
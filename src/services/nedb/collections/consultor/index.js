import Datastore from "nedb";

const db_consultores = new Datastore('./src/services/nedb/collections/consultor/consultores.db');
const db_consultores_msg = new Datastore('./src/services/nedb/collections/consultor/messages.db');

db_consultores.loadDatabase();
db_consultores_msg.loadDatabase();

export {db_consultores, db_consultores_msg};
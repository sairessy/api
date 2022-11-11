import Datastore from "nedb";

const rootDir = "./src/database/nedb/modelo/collections";

const db = {
  empresas: new Datastore(rootDir + "/empresas.db"),
  modelos: new Datastore(rootDir + "/modelos.db"),
  photos: new Datastore(rootDir + "/photos.db"),
};

db.empresas.loadDatabase();
db.modelos.loadDatabase();
db.photos.loadDatabase();

export default db;

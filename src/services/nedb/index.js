import Datastore from "nedb";

const db = {
  user: {
    users: new Datastore("./src/services/nedb/collections/user/users.db"),
  },
  machina: {
    machinas: new Datastore("./src/services/nedb/collections/machina/machinas.db"),
  },
  general: {
    data: new Datastore("./src/services/nedb/collections/general/data.db"),
  },
  foco_cadastro: {
    estudantes: new Datastore("./src/services/nedb/collections/foco-cadastro/estudantes.db"),
  }
};

for (const app in db) {
  for (const col_name in db[app]) {
    db[app][col_name].loadDatabase();
  }
}

export default db;

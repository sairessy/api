import Datastore from "nedb";

const db = {
  user: {
    users: new Datastore("./src/services/nedb/collections/user/users.db"),
  },
  log: {
    logs: new Datastore('./src/services/nedb/collections/log/logs.db')
  }
};

for (const app in db) {
  for (const col_name in db[app]) {
    db[app][col_name].loadDatabase();
  }
}

export default db;

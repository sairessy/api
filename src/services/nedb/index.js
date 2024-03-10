import Datastore from "nedb";

const db = {
  user: {
    users: new Datastore("./src/services/nedb/collections/user/users.db"),
  },
  log: {
    logs: new Datastore('./src/services/nedb/collections/log/logs.db')
  },
  feedback: {
    feedbacks: new Datastore('./src/services/nedb/collections/feedback/feedbacks.db')
  },
  machina: {
    machinas: new Datastore('./src/services/nedb/collections/machina/machinas.db')
  }
};

for (const app in db) {
  for (const col_name in db[app]) {
    db[app][col_name].loadDatabase();
  }
}

export default db;
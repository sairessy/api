import Datastore from "nedb";

const rootDir = "./src/database/nedb/collections";

const db = {
  users: new Datastore(rootDir + "/users.db"),
  tracker: {
    positions: new Datastore(rootDir + "/tracker/positions.db"),
  },
  devices: new Datastore(rootDir + "/devices.db"),
};

db.users.loadDatabase();
db.tracker.positions.loadDatabase();
db.devices.loadDatabase();

export default db;

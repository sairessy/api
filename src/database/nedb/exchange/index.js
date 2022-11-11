import Datastore from "nedb";

const rootDir = "./src/database/nedb/exchange/collections";

const db = {
  users: new Datastore(rootDir + "/users.db"),
  posts: new Datastore(rootDir + "/posts.db"),
};

db.users.loadDatabase();
db.posts.positions.loadDatabase();

export default db;

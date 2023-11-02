import db from "../../services/nedb/index.js";

export default class IoMain {
  on_connection(socket) {
    socket.on("data", (data) => {
      db.general.data.insert(data, (err, doc) => {
        if (err) {
          throw err;
        }
      });
      socket.emit("data", data);
    });
  }
}

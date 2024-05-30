import { Server } from "socket.io";
import server from "../../routes/index.js";

const io = new Server(server);

// main
async function io_run() {
  io('connection', (socket) => {
    io.socket.emmit('You are connected.');
    console.log(socket);
  }).catch(err => {
    console.log('Socket connection error.');
    console.log(error);
  });
}

export default io_run;

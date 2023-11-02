import { Server } from "socket.io";
import server from "../../routes/index.js";

const io = new Server(server);

export default io;

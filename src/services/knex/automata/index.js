import knex from "knex";
import { env } from "../../../config/index.js";

const {
  AUTOMATA_HOST,
  AUTOMATA_PORT,
  AUTOMATA_USER,
  AUTOMATA_PASSWORD,
  AUTOMATA_DATABASE,
} = process.env || env;

export default knex({
  client: "mysql",
  connection: {
    host: AUTOMATA_HOST,
    port: AUTOMATA_PORT,
    user: AUTOMATA_USER,
    password: AUTOMATA_PASSWORD,
    database: AUTOMATA_DATABASE,
  },
});

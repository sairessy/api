import knex from "knex";
import { env } from "../../../config/index.js";

const { MAIN_HOST, MAIN_PORT, MAIN_USER, MAIN_PASSWORD, MAIN_DATABASE } =
  process.env || env;

export default knex({
  client: "mysql",
  connection: {
    host: MAIN_HOST,
    port: MAIN_PORT,
    user: MAIN_USER,
    password: MAIN_PASSWORD,
    database: MAIN_DATABASE,
  },
});

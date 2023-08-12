import knex from "knex";
import { env } from "../../../config/index.js";

const { SIGA_HOST, SIGA_PORT, SIGA_USER, SIGA_PASSWORD, SIGA_DATABASE } =
  process.env || env;

export default knex({
  client: "mysql",
  connection: {
    host: SIGA_HOST,
    port: SIGA_PORT,
    user: SIGA_USER,
    password: SIGA_PASSWORD,
    database: SIGA_DATABASE,
  },
});

import knex from "knex";
import { env } from "../../../config/index.js";

const {
  PROFILE_HOST,
  PROFILE_PORT,
  PROFILE_USER,
  PROFILE_PASSWORD,
  PROFILE_DATABASE,
} = env || process.env;

export default knex({
  client: "mysql",
  connection: {
    host: PROFILE_HOST,
    port: PROFILE_PORT,
    user: PROFILE_USER,
    password: PROFILE_PASSWORD,
    database: PROFILE_DATABASE,
  },
});

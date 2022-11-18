import dotenv from "dotenv";

const api_url = "http://localhost:3000";

const env = dotenv.config().parsed;

export { api_url, env };

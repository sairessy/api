import dotenv from "dotenv";

import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);

export const env = dotenv.config().parsed;
export const __dirname = path.dirname(__filename);

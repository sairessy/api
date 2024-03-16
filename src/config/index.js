import dotenv from "dotenv";

import { fileURLToPath } from 'url';
import path from 'path';

export const env = process.env.EMAIL ? process.env : dotenv.config().parsed;
export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);
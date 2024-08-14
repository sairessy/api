import dotenv from "dotenv";
import crypto from "crypto";

import { fileURLToPath } from "url";
import path from "path";

export const env = process.env.EMAIL ? process.env : dotenv.config().parsed;
export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

export const hash = (data) => {
  return crypto.createHash("sha256").update(data).digest("hex");
};

export const mongoConnectionString = env.LOCAL
  ? "mongodb://127.0.0.1:27017/test"
  : `mongodb+srv://sairessy:${env.MONGO_PASS}@cluster0.bpljm3t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

export const areas = [
  {
    id: "engel",
    label: "Electricidade",
    tags: [
      "electricista",
      "electricidade",
      "electrico",
      "eléctrico",
      "eletricista",
      "eletricidade",
      "eletrico",
      "elétrico",
    ],
  },
  { id: "eletnc", label: "Electrônica" },
  { id: "engmec", label: "Mecânica" },
  {
    id: "canaliz",
    label: "Canalizador",
    tags: ["canalização", "canalizacao", "canalizador"],
  },
  {
    id: "engcivil",
    label: "Construção Civil",
    tags: ["construção", "construcao"],
  },
  {
    id: "inf",
    label: "Informática",
    tags: ["informática", "informático", "informatica", "informatico"],
  },
  { id: "carp", label: "Carpintaria", tags: ["carpinteiro", "carpintaria"] },
  { id: "serr", label: "Serralharia", tags: ["serralharia", "serralheiro"] },
  { id: "gard", label: "Jardinagem", tags: ["jardinagem", "jardineiro"] },
  { id: "painting", label: "Pintura", tags: ["pintor", "pintura"] },
  { id: "engagr", label: "Agrónomia" },
  { id: "arq", label: "Arquitectura", tags: ["arquitecto", "arquitectura"] },
  { id: "gest", label: "Gestão & Administração", tags: ["gestão", "gestao"] },
  {
    id: "cont",
    label: "Contabilidade",
    tags: ["contabilista", "contabilidade"],
  },
  {
    id: "econ",
    label: "Economia & Finanças",
    tags: ["economia", "economista"],
  },
  {
    id: "mkt",
    label: "Marketing & Publicidade",
    tags: ["marketing", "publicidade"],
  },
  { id: "dir", label: "Direito", tags: ["jurista", "direito"] },
  { id: "med", label: "Medicina", tags: ["medico", "médico", "medicina"] },
  { id: "math", label: "Matemática" },
  { id: "ing", label: "Inglês" },
  { id: "pt", label: "Português" },
  { id: "qui", label: "Química" },
  { id: "fi", label: "Física" },
  { id: "psy", label: "Psicologia" },
];

export const tecnicos = [
  {
    id: 0,
    area: "inf",
    bairro: "Alto Maé",
    name: "Kelvin Santos",
    tel: "+258872081991",
  },
  {
    id: 1,
    area: "inf",
    bairro: "Alto Maé",
    name: "Naira Abdul",
    tel: "+258872081891",
  },
  {
    id: 2,
    area: "inf",
    bairro: "Coop",
    name: "Paulo Guedes",
    tel: "+258872081911",
  },
  {
    id: 3,
    area: "engel",
    bairro: "Alto Maé",
    name: "Carlos Pinto",
    tel: "+258872081981",
  },
];

// Casas
export const houses = [
  {
    id: 0,
    quartos: 3,
    cozinha: 1,
    garagem: 0,
    bairro: "Coop",
    tipo: "flat",
    tel: "847873466",
  },
  {
    id: 1,
    quartos: 2,
    cozinha: 1,
    garagem: 1,
    bairro: "Alto Maé",
    tipo: "flat",
    tel: "847873466",
  },
];

import { houses, tecnicos } from "../../config/index.js";

export const getHouses = async (req, res) => {
  res.json(houses);
};

export const getTechs = async (req, res) => {
  res.json(tecnicos);
};

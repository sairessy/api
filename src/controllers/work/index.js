import db from '../../services/nedb/index.js';
import {professions} from '../../config/work.js';

export const home = (req, res) => {
  res.json({info: 'Welcome to work'});
}

export const create = async (req, res) => {
  const data = req.body;
  db.feedback.feedbacks.insert(data, (err, doc) => {
    res.json(doc);
  });
}

export const all = async (req, res) => {};

export const profissoes = (req, res) => {
  res.json(professions)
}
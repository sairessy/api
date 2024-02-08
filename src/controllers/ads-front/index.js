import db from '../../services/nedb/index.js';

export const home = (req, res) => {
  res.json({info: 'Welcome to ads-front!'});
}

export const create = async (req, res) => {
  const data = req.body;
  db.feedback.feedbacks.insert(data, (err, doc) => {
    res.json(doc);
  });
}

export const all = async (req, res) => {
  db.feedback.feedbacks.find({}, (err, data) => {
    res.json(data);
  });
}

export const remove = (req, res) => {};
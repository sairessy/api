import db from '../../services/nedb/index.js';

export const home = (req, res) => {
  res.json({info: 'Welcome to feedback!'});
}

export const create = async (req, res) => {
  const fb = req.body;
  db.feedback.feedbacks.insert(fb, (err, doc) => {
    res.json(doc);
  });
}

export const all = async (req, res) => {
  db.feedback.feedbacks.find({}, (err, data) => {
    res.json(data);
  });
}
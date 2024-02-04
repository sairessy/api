import db from '../../services/nedb/index.js';
import Feedback from '../../models/feedback/index.js';

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
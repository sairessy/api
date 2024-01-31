import db from '../../services/nedb/index.js';

export default async (req, res, next) => {
  const log = {
    params: req.params,
    url: req.url,
    created_at: new Date()
  }
  
  db.log.logs.insert(log, (err, doc) => {
    if (err) throw err;
  })
  next();
};
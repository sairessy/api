import Machina from '../../models/machina/index.js'
import db from '../../services/nedb/index.js'

export const create = async (req, res) => {
  const params = req.body
  db.machina.machinas.insert(params, (err, doc) => {
    res.json(doc)
  })
}

export const update = (req, res) => {
  const _id = req.params.id
  const data = req.body
  db.machina.machinas.update({_id}, {$set: data}, (err, num) => {
    res.json({sucess: num > 0});
  })
}

export const findById = async (req, res) => {
  const _id = req.params.id;
  if(_id.toLowerCase() == 'all') {
    db.machina.machinas.find({}, (err, data) => res.json(data));
  } else
  db.machina.machinas.findOne({_id}, (err, doc) => {
    res.json(doc)
  })
}

export const removeAttr = async (req, res) => {
  const _id = req.params.id
  const params = req.body.attr;
  const obj = {}
  params.map(e => {
    obj[e] = true
  })
  db.machina.machinas.update({_id}, {$unset: obj}, {}, (err, num) => {
    res.json(obj)
  })
}

export const remove = async (req, res) => {
  const _id = req.params.id
  db.machina.machinas.remove({_id})
  res.json({})
}
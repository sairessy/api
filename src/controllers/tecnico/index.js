import db from '../../services/nedb/index.js';

export const home = async (req, res) => {
  res.json({});
};

export const update = async (req, res) => {
  const {_id, nome, bairro, sexo, nascimento} = req.body;
  db.user.users.update({_id}, {$set: {
    nome, bairro, sexo, nascimento
  }}, (err, numReplaced) => {
    res.json({});
  });
};
import db from "../../database/nedb/modelo/index.js";
import Modelo from "../../models/modelo/Modelo.js";
import Photo from "../../models/modelo/Photo.js";

import { domain } from "./config.js";

export const create = async (req, res) => {
  const { fullname, gender, age, address, empresa } = req.body;

  const modelo = new Modelo(fullname, null, age, address, gender, empresa);

  try {
    db.modelos.insert(modelo, (err, doc) => {
      res.json({ data: doc });
    });
  } catch (error) {
    res.status(500).json({ error });
    console.log(error);
  }
};

export const all = async (req, res) => {
  const { id: empresa } = req.params;

  try {
    db.modelos
      .find({ empresa, removed: false })
      .sort({ created_at: -1 })
      .exec(async (err, data) => {
        const d = data;

        for (let i = 0; i < d.length; i++) {
          d[i].company = await new Promise((resolve, reject) => {
            db.empresas.findOne({ _id: d[i].empresa }, (err, doc) => {
              resolve(doc);
            });
          });
        }

        res.json({ data: d });
      });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const update = async (req, res) => {
  const data = req.body;

  db.modelos.update({});
};

export const add_photo = async (req, res) => {
  const { modelo, name } = req.body;

  const photo = new Photo(modelo, name);

  try {
    db.photos.insert(photo, (err, doc) => {
      res.json({ data: doc });
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const remove = async (req, res) => {
  const _id = req.params.id;

  try {
    db.modelos.update(
      { _id },
      { $set: { removed: true } },
      (err, num_replaced) => {
        // res.json({ num_replaced });
        res.redirect(domain + "/pages/panel");
      }
    );
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const get_modelo = async (req, res) => {
  const _id = req.params.id;

  try {
    db.modelos.findOne({ _id }, (err, doc) => {
      res.json({ data: doc });
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const update_modelo = async (req, res) => {
  const { email, full_name, contact, gender, age, address, modelo_id } =
    req.body;

  try {
    db.modelos.update(
      { _id: modelo_id },
      { $set: { email, full_name, contact, gender, age, address } },
      (err, num_replaced) => {
        res.json({ data: num_replaced });
      }
    );
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const delete_photo = async (req, res) => {
  const id = req.params.id;

  try {
    db.photos.remove({ _id: id }, (err, num) => {
      res.redirect(domain + "/pages/dashboard/?id=" + req.params.user);
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const search_model = async (req, res) => {
  const text = req.params.text.toLowerCase();
  const id = req.params.id;

  try {
    db.modelos.find({ removed: false, empresa: id }, (err, data) => {
      const filtered = data.filter(
        ({ _id, created_at, full_name }) =>
          _id.toLowerCase().includes(text) ||
          full_name.toLowerCase().includes(text)
      );
      res.json({ data: filtered.length === 0 ? data : filtered });
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

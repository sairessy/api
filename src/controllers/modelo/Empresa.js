import db from "../../database/nedb/modelo/index.js";
import Photo from "../../models/modelo/Photo.js";
import Empresa from "../../models/modelo/Empresa.js";

export const criar_empresa = async (req, res) => {
  const { email, password } = req.body;

  const empresa = new Empresa("", email, password);

  try {
    db.empresas.findOne({ email }, (err, doc) => {
      if (doc !== null) {
        res.status(409).json({ msg: "O email introduzido já foi usado!" });
      } else {
        db.empresas.insert(empresa, (err, dc) => {
          res.json({ data: dc });
        });
      }
    });
  } catch (error) {
    res.status(500).json({ msg: "Houve um erro interno" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    db.empresas.findOne({ email, password }, (err, doc) => {
      res.json({ data: doc });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

export const update = async (req, res) => {
  const { name, contact, empresa } = req.body;

  try {
    db.empresas.update(
      { _id: empresa },
      { $set: { contact, name } },
      (err, num_replaced) => {
        res.json({ data: num_replaced });
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

export const info = async (req, res) => {
  const _id = req.params.id;

  try {
    db.empresas.findOne({ _id }, (err, doc) => {
      res.json({ data: doc });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

export const upload_photo = async (req, res) => {
  const { name, modelo_id, empresa, data } = req.body;

  const photo = new Photo(modelo_id, name, empresa, data);

  try {
    db.photos.insert(photo, (err, doc) => {
      res.json({});
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

export const get_model_photos = (req, res) => {
  const id = req.params.id;
  try {
    db.photos.find({ modelo_id: id }, (err, data) => {
      res.json(data);
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const get_all_photos = (req, res) => {
  try {
    db.photos
      .find({})
      .sort({ created_at: -1 })
      .exec(async (err, _data) => {
        const data = _data;

        for (let i = 0; i < data.length; i++) {
          data[i].company = await new Promise((resolve, reject) => {
            db.empresas.findOne({ _id: data[i].empresa }, (err, doc) => {
              const { contact, email, name, _id: id } = doc;
              resolve({ contact, email, name, id });
            });
          });
        }
        res.json(data);
      });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const get_all_photos_company = (req, res) => {
  const id = req.params.company_id;
  try {
    db.photos
      .find({ empresa: id })
      .sort({ created_at: -1 })
      .exec(async (err, _data) => {
        const data = _data;

        for (let i = 0; i < data.length; i++) {
          data[i].company = await new Promise((resolve, reject) => {
            db.empresas.findOne({ _id: data[i].empresa }, (err, doc) => {
              const { contact, email, name, _id: id } = doc;
              resolve({ contact, email, name, id });
            });
          });
        }
        res.json(data);
      });
  } catch (error) {
    res.status(500).json({ error });
  }
};

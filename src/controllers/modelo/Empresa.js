import db from "../../database/nedb/modelo/index.js";
import Photo from "../../models/modelo/Photo.js";

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
  const { name, contact } = req.body;

  try {
    db.empresas.update({}, { $set: { contact, name } }, (err, num_replaced) => {
      res.json({ data: num_replaced });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

export const info = async (req, res) => {
  // const { name, contact } = req.body;

  try {
    db.empresas.findOne({}, (err, doc) => {
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
    db.photos.find({}, async (err, _data) => {
      const data = _data;

      for (let i = 0; i < data.length; i++) {
        data[i].company = await new Promise((resolve, reject) => {
          db.empresas.findOne({ _id: data[i].empresa }, (err, doc) => {
            const { contact, email, name } = doc;
            resolve({ contact, email, name });
          });
        });
      }
      res.json(data);
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

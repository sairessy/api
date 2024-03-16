import db from '../../../services/nedb/index.js'

export const sales_all = async (req, res) => {
  db.gestor.sales.find({}, (err, data) => {
    res.json(data)
  })
};

export const sales_create = async (req, res) => {
  db.gestor.sales.insert({product: null, price: null, user: null, created_at: new Date()}, (err, doc) => {
    res.json(doc)
  })
};

export const sales_product_create = async (req, res) => {
  db.gestor.sales_products.insert({name: '', price: null, user: null, created_at: new Date()}, (err, doc) => {
    res.json(doc);
  })
};

export const sales_product_all = async (req, res) => {
  db.gestor.sales_products.find({}, (err, data) => {
    res.json(data)
  })
};
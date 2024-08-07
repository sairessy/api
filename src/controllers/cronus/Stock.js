import { Asset } from "../../models/cronus/asset.js";
import { Stock, StockCategoria } from "../../models/cronus/stock.js";

export const getStock = async (req, res) => {
  const user = req.headers.user;

  try {
    const stock = await Stock.find({ user });
    res.json(stock);
  } catch (error) {
    console.log(error);
    res.status(409).json({});
  }
};

export const createStock = async (req, res) => {
  const data = req.body;
  const user = req.headers.user;

  try {
    const stock = await new Stock({ ...data, user }).save();
    res.json(Stock);
  } catch (error) {
    console.log(error);
    res.status(409).json({});
  }
};

export const createStockCategoria = async (req, res) => {
  const data = req.body;
  const user = req.headers.user;

  try {
    const categoria = await new StockCategoria({ ...data, user }).save();
    res.json(categoria);
  } catch (error) {
    console.log(error);
    res.status(409).json({});
  }
};

export const getStockCategoria = async (req, res) => {
  const user = req.headers.user;

  try {
    const stock = await StockCategoria.find({ user });
    res.json(stock);
  } catch (error) {
    console.log(error);
    res.status(409).json({});
  }
};

export const getTotalStockServices = async (req, res) => {
  const user = req.headers.user;

  const stock = (await Stock.find({ user })).filter(({ removed }) => !removed);
  const asset = (await Asset.find({  })).filter(({ removed }) => !removed);

  console.log(stock, asset, user)

  let s_total = 0;
  let a_total = 0;

  for (const s of stock) {
    s_total += (parseFloat(s.valor) || 0) * (parseInt(s.quantidade) || 0);
  }

  for (const a of asset) {
    a_total += parseFloat(a.valor) || 0;
  }

  res.json({ total: s_total + a_total });
};

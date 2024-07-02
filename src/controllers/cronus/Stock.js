import { Stock, StockCategoria } from "../../models/cronus/stock.js";

export const getStock = async (req, res) => {
  try {
    const stock = await Stock.find();
    res.json(stock);
  } catch (error) {
    console.log(error);
    res.status(409).json({});
  }
};

export const createStock = async (req, res) => {
  const data = req.body;
  const user = req.headers.user;

  console.log(data, user);

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

  console.log(data, user);

  try {
    const categoria = await new StockCategoria({ ...data, user }).save();
    res.json(categoria);
  } catch (error) {
    console.log(error);
    res.status(409).json({});
  }
};

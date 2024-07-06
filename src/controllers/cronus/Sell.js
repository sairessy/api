import { Sell } from "../../models/cronus/Sell.js";

export const createSell = async (req, res) => {
  const data = req.body;
  const user = req.headers.user;

  console.log(data, user);

  try {
    const sell = await new Sell({
      cart: data,
      created_at: new Date(),
      user,
    }).save();
    res.json(sell);
  } catch (error) {
    console.log(error);
    res.status(409).json({});
  }
};

export const getSales = async (req, res) => {
  try {
    const sales = await Sell.find();
    res.json(sales);
  } catch (error) {
    console.log(error);
    res.status(409).json({});
  }
};
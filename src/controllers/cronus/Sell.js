// import { Stock } from "../../models/cronus/Stock.js";
import { Sell } from "../../models/cronus/Sell.js";

export const createSell = async (req, res) => {
  const data = req.body;
  const user = req.headers.user;

  try {
    const sell = await new Sell({
      cart: data.cart,
      bi: data.bi,
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
  const user = req.headers.user;

  try {
    const sales = await Sell.find({user});

    // for (let i = 0; i < sales.length; i++) {
    //   const sale = sales[i];
    //   for (let j = 0; j < sale.cart.length; j++) {
    //     const cart = sale.cart
    //     const p = await Stock({_id: cart[j].product})
    //     console.log(p)
    //   }
    // }
      

    res.json(sales);
  } catch (error) {
    console.log(error);
    res.status(409).json({});
  }
};
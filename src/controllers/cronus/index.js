import { Staff } from "../../models/cronus/staff.js";
import { Stock } from "../../models/cronus/stock.js";
import { Credito } from "../../models/cronus/credito.js";
import { Asset } from "../../models/cronus/asset.js";
import { Sell } from "../../models/cronus/Sell.js";
import { Client } from "../../models/cronus/Client.js";

export const removeItem = async (req, res) => {
  const { id, item } = req.body;
  const user = req.headers.user;

  if (item === "staff") {
    const data = await Staff.findOneAndUpdate(
      { _id: id },
      { removed: true },
      { new: true }
    );

    res.json(data);
  }

  if (item === "client") {
    const data = await Client.findOneAndUpdate(
      { _id: id },
      { removed: true },
      { new: true }
    );

    res.json(data);
  }

  if (item === "stock") {
    const data = await Stock.findOneAndUpdate(
      { _id: id },
      { removed: true },
      { new: true }
    );

    res.json(data);
  }

  if (item === "asset") {
    const data = await Asset.findOneAndUpdate(
      { _id: id },
      { removed: true },
      { new: true }
    );

    res.json(data);
  }

  if (item === "credito") {
    const data = await Credito.findOneAndUpdate(
      { _id: id },
      { removed: true },
      { new: true }
    );

    res.json(data);
  }

  if (item === "sales") {
    const data = await Sell.findOneAndUpdate(
      { _id: id },
      { removed: true },
      { new: true }
    );

    res.json(data);
  }
};

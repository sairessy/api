import { Staff } from "../../models/cronus/staff.js";
import { Stock } from "../../models/cronus/stock.js";
import { Credito } from "../../models/cronus/credito.js";
import { Asset } from "../../models/cronus/asset.js";

export const removeItem = async (req, res) => {
  const { id, item } = req.body;
  const user = req.headers.user;
  console.log(id, item, user);

  if (item === "staff") {
    const data = await Staff.findOneAndUpdate(
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
};

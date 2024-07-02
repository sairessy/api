import { Asset, AssetCategoria } from "../../models/cronus/asset.js";

export const getAsset = async (req, res) => {
  try {
    const asset = await Asset.find();
    res.json(asset);
  } catch (error) {
    console.log(error);
    res.status(409).json({});
  }
};

export const getAssetCategoria = async (req, res) => {
  try {
    const asset = await AssetCategoria.find();
    res.json(asset);
  } catch (error) {
    console.log(error);
    res.status(409).json({});
  }
};

export const createAsset = async (req, res) => {
  const data = req.body;
  const user = req.headers.user;

  console.log(data, user)

  try {
    const staff = await new Asset({...data, user}).save();
    res.json(staff);
  } catch (error) {
    console.log(error);
    res.status(409).json({});
  }
};

export const createAssetCategoria = async (req, res) => {
  const data = req.body;
  const user = req.headers.user;

  console.log(data, user)

  try {
    const categoria = await new AssetCategoria({...data, user}).save();
    res.json(categoria);
  } catch (error) {
    console.log(error);
    res.status(409).json({});
  }
}

import { Asset, AssetCategoria } from "../../models/cronus/asset.js";

export const getAsset = async (req, res) => {
  const user = req.headers.user;

  try {
    let asset = await Asset.find({user}).sort({valor: 1});
    asset = asset.filter(({removed}) => !removed);
    res.json(asset);
  } catch (error) {
    console.log(error);
    res.status(409).json({});
  }
};

export const getAssetCategoria = async (req, res) => {
  const user = req.headers.user;

  try {
    const asset = await AssetCategoria.find({user});
    res.json(asset);
  } catch (error) {
    console.log(error);
    res.status(409).json({});
  }
};

export const createAsset = async (req, res) => {
  const data = req.body;
  const user = req.headers.user;

  try {
    const staff = await new Asset({...data, user}).save();
    res.json(staff);
  } catch (error) {
    console.log(error);
    res.status(409).json({});
  }
};

export const updateAsset = async (req, res) => {
  const asset = req.headers.asset;

  try {
    const data = await Asset.findOneAndUpdate({ _id: asset }, req.body, { new: true });
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(409).json({});
  }
};

export const createAssetCategoria = async (req, res) => {
  const data = req.body;
  const user = req.headers.user;

  try {
    const categoria = await new AssetCategoria({...data, user}).save();
    res.json(categoria);
  } catch (error) {
    console.log(error);
    res.status(409).json({});
  }
}

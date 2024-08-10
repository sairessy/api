import { Client, ClientCategoria } from "../../models/cronus/Client.js";

export const getClient = async (req, res) => {
  const user = req.headers.user;
  try {
    const client = await Client.find({user});
    res.json(client);
  } catch (error) {
    console.log(error);
    res.status(409).json({});
  }
};

export const createClient = async (req, res) => {
  const data = req.body;
  const user = req.headers.user;

  try {
    const client = await new Client({...data, user}).save();
    res.json(client);
  } catch (error) {
    console.log(error);
    res.status(409).json({});
  }
};

export const createClientCategoria = async (req, res) => {
  const data = req.body;
  const user = req.headers.user;

  try {
    const categoria = await new ClientCategoria({...data, user}).save();
    res.json(categoria);
  } catch (error) {
    console.log(error);
    res.status(409).json({});
  }
}

export const getClientCategoria = async (req, res) => {
  const user = req.headers.user;
  try {
    const categorias = await ClientCategoria.find({user});
    res.json(categorias);
  } catch (error) {
    console.log(error);
    res.status(409).json({});
  }
};

export const updateClient = async (req, res) => {
  const client = req.headers.client;
  try {
    const update = await Client.findOneAndUpdate({ _id: client }, req.body, { new: true });
    res.json(update);
  } catch (error) {
    console.log(error);
    res.status(409).json({});
  }
};
import { Staff, StaffCategoria } from "../../models/cronus/staff.js";

export const getStaff = async (req, res) => {
  try {
    const staff = await Staff.find();
    res.json(staff);
  } catch (error) {
    console.log(error);
    res.status(409).json({});
  }
};

export const createStaff = async (req, res) => {
  const data = req.body;
  const user = req.headers.user;

  console.log(data, user)

  try {
    const staff = await new Staff({...data, user}).save();
    res.json(staff);
  } catch (error) {
    console.log(error);
    res.status(409).json({});
  }
};

export const createStaffCategoria = async (req, res) => {
  const data = req.body;
  const user = req.headers.user;

  console.log(data, user)

  try {
    const categoria = await new StaffCategoria({...data, user}).save();
    res.json(categoria);
  } catch (error) {
    console.log(error);
    res.status(409).json({});
  }
}

export const getStaffCategoria = async (req, res) => {
  try {
    const categorias = await StaffCategoria.find();
    res.json(categorias);
  } catch (error) {
    console.log(error);
    res.status(409).json({});
  }
};

export const updateStaff = async (req, res) => {
  const staff = req.headers.staff;
  try {
    const update = await Staff.findOneAndUpdate({ _id: staff }, req.body, { new: true });
    res.json(update);
  } catch (error) {
    console.log(error);
    res.status(409).json({});
  }
};
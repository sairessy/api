export const create = async (req, res) => {
  res.json({ d: req.body });
};
export const all = async (req, res) => {
  res.json({ clients: [] });
};

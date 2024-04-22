export const home = (req, res) => {
  const auth = req.headers.authorization;
  res.json({
    app: "Truck 🖖",
  });
};

export const loaders = [
  {
    email: "sairessy@gmail.com",
    nome: "Sairesse Victorino",
    tel: 872081978,
  },
];

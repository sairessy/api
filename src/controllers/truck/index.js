export const home = (req, res) => {
	const auth = req.headers.authorization;
  res.json({
    app: "Truck 🖖",
  });
}
export default async (req, res, next) => {
  if (!req.cookies.user_id) {
    res.status(409).json({ info: "Not authenticated" });
  } else {
    req.user = { id: req.cookies.user_id };
    next();
  }
};

import express from "express";
import {
  all,
  create,
  like,
  update,
  _delete,
} from "../../controllers/thoughs/Post.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json({});
});

// Docs routes
router.post("/create", create);
router.get("/thoughs/all", all);
router.get("/delete/:id", _delete);
router.put("/update/:id", update);
router.post("/like", like);
router.get("/test", (req, res) => res.json({ test: 77 }));

export default router;

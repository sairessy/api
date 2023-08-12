import express from "express";

import {
  create,
  all,
  like,
  unlike,
  share,
  comment,
} from "../../controllers/thoughs/Post.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json({ r: "th" });
});

// Post routes
router.post("/create", create);
router.get("/all", all);
router.post("/like", like);
router.post("/unlike", unlike);
router.post("/share", share);
router.post("/comment", comment);

export default router;

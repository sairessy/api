import express from "express";
import { create, remove, userVideos, videos } from "../../controllers/panel/index.js";

const router = express.Router();

router.get("/", (req, res) => res.json({ app: "Panel" }));
router.post("/create", create);
router.delete('/delete/:video', remove);

// Panel front
router.get("/videos/", userVideos);
router.get("/videos/:panel_id", videos);

export default router;

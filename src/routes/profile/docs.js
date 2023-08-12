import express from "express"
import { all, create, update, _delete } from "../../controllers/profile/Doc.js"

const router = express.Router()

router.get("/", async (req, res) => {
  res.json({})
})

// Docs routes
router.post("/create/user/:id", create)
router.get("/all/user/:id", all)
router.get("/delete/:id", _delete)
router.put("/update/:id", update)

export default router

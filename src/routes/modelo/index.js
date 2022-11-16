import express from "express";
import {
  criar_empresa,
  get_all_photos,
  get_all_photos_company,
  get_model_photos,
  info,
  login,
  update,
  upload_photo,
} from "../../controllers/modelo/Empresa.js";
import {
  create,
  all,
  get_modelo,
  update_modelo,
  remove,
  delete_photo,
  search_model,
} from "../../controllers/modelo/Modelo.js";

const router = express.Router();

router.get("/", (req, res) => res.json({ app: "Welcome to our api" }));
router.post("/empresa/login", login);
router.post("/create", create);
router.put("/empresa/update", update);
router.get("/empresa/:id", all);
router.get("/empresa/info/:id", info);
router.get("/:id", get_modelo);
router.put("/update", update_modelo);
router.post("/photo", upload_photo);
router.get("/photos/:id", get_model_photos);
router.get("/photo/all", get_all_photos);
router.get("/photo/all/:company_id", get_all_photos_company);
router.get("/delete/:id", remove);
router.get("/photo/delete/:id/:user", delete_photo);
router.get("/search/:text/empresa/:id", search_model);
router.post("/empresa/criar", criar_empresa);

export default router;

import express from "express";
import Message from "../../models/consultor/Message.js";
import { db_consultores_msg } from "../../services/nedb/collections/consultor/index.js";

const router = express.Router();

router.post("/msg", async (req, res) => {
  const { user, text, contact } = req.body;
  const message = new Message({ user, text, contact });
  db_consultores_msg.insert(message, (err, doc) => res.json(doc));
});

router.get("/:id", async (req, res) => {
  db_consultores_msg.find({ user: req.params.id, removed: false }, (err, docs) =>
    res.json(docs)
  );
});

router.post("/mark_readen", (req, res) => {
  db_consultores_msg.update(
    { _id: req.body.id },
    { $set: { readen: true } },
    (err, num) => {
      db_consultores_msg.find({ user: req.body.user, removed: false }, (err2, docs) => {
        res.json(docs);
      });
    }
  );
});

router.post("/remove", (req, res) => {
  db_consultores_msg.update(
    { _id: req.body.id },
    { $set: { removed: true } },
    (err, num) => {
      db_consultores_msg.find({ user: req.body.user, removed: false }, (err2, docs) => {
        res.json(docs);
      });
    }
  );
});

export default router;

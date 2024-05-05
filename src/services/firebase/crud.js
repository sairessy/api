import { collection, addDoc, getDocs } from 'firebase/firestore';
import db from "./index.js";

export const create = async () => {
  try {
    const data = {app: 'consultor'};
    const docRef = await addDoc(collection(db, "user"), data);
    console.log({ message: "Document created successfully", id: docRef.id });
  } catch (error) {
    console.error("Error creating document:", error);
  }
};

export const read = async () => {
  try {
    const snapshot = await db.collection("your_collection").get();
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.json(data);
  } catch (error) {
    console.error("Error fetching documents:", error);
    res.status(500).json({ error: "Error fetching documents" });
  }
};

export const update = async () => {
  try {
    const { id } = req.params;
    const { data } = req.body;
    await db.collection("your_collection").doc(id).update(data);
    res.json({ message: "Document updated successfully" });
  } catch (error) {
    console.error("Error updating document:", error);
    res.status(500).json({ error: "Error updating document" });
  }
};

export const remove = async () => {
  try {
    const { id } = req.params;
    await db.collection("your_collection").doc(id).delete();
    res.json({ message: "Document deleted successfully" });
  } catch (error) {
    console.error("Error deleting document:", error);
    res.status(500).json({ error: "Error deleting document" });
  }
};

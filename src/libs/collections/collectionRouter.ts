import { Router } from "express";
import { db } from "../db/db";
import { ICollection } from "./collection";
import { getRandomItem } from "../utils";

export const makeCollectionRouter = () => {
  const collectionRouter = Router();

  collectionRouter.post("/collections", async (req, res) => {
    try {

      const collection: ICollection = req.body;
      
      for (let index = 0; index < 100; index++) {
        const json = {}
        for (const field of collection.fields) {
          json[field.key] = getRandomItem(field.values)
        }
        await db.collection(collection.collection).insertOne(json);
      }
        
      res.status(200).json({ res : "asd"})
      
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });

  return collectionRouter;
};

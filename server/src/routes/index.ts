import { Router } from "express";
import Image from '../models/image';

const router = Router();

router.get("/catalog", async (req, res) => {
  const images = await Image.find();
  res.json(images);
});

router.post("/catalog", async (req, res) =>{
  const img = new Image({
    title: req.body.title,
    url: `/img/${req.file?.filename}`,
    originalName: req.file?.originalname,
    mimeType: req.file?.mimetype,
  })

  await img.save();

  res.json({
    status: 200,
    message: "Imagen guardada",
  })
  
})

export default router;

import { Router } from "express";

const router = Router();

router.get("/catalog", (req, res) => {
  res.send("Listando catalogo");
});

export default router;

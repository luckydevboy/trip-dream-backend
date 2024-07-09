import express from "express";

import { getAccommodation, getAccommodations } from "../controllers";

const router = express.Router();

router.get("/", getAccommodations);
router.get("/:id", getAccommodation);

export default router;

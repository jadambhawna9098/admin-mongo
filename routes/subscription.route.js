import express from "express";
import { body } from "express-validator";
import { saveAll, save, list } from "../controller.js/subscription.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/saveAll", verifyToken, saveAll);//not complete

router.post("/save", save);

router.get("/list", list);

export default router;
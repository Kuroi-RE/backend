import express from "express";
import { getAll } from "../controllers/user-controllers.js";

const router = express.Router();

router.get("/", getAll);

export default router;

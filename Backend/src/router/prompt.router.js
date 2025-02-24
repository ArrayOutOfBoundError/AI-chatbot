import { Router } from "express";
import { generate } from "../controller/prompt.controller.js";

const router = Router();

router.route("/prompt").post(generate);

export default router;
import { Router } from "express";
import { getAllUrls, getInfoUrlById, postUrl, redirectByShortCode } from "../controllers/url.controller.js";

const router = new Router();

router.get("/", getAllUrls);
router.get("/info/:id", getInfoUrlById);
router.post("/", postUrl);
router.get("/:short_code", redirectByShortCode);

export default router;

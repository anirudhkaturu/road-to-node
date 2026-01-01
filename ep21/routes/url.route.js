import { Router } from "express";
import { getAllUrls, getUrlById } from "../controllers/url.controller.js";

const router = new Router();

router.get("/", getAllUrls);
router.get("/:id", getUrlById);

export default router;

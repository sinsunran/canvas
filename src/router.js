import express from "express";
import { getHome, getRead, postRead, readId } from "./controller";
import { uploadText } from "./middleware";

const router = express.Router();

router.route("/").get(getHome);
router.route("/read").get(getRead).post(uploadText.single("txt"), postRead);
router.route("/read/:id").get(readId);

export default router;

import { Router } from "express";
import { VideoController } from "./controller/video-controller";
import asyncHandler from "express-async-handler";

const router = Router();

const controller = new VideoController();

router.post("/videos", controller.add.bind(controller));

router.get("/videos", controller.index.bind(controller));

router.delete("/videos/:filename", asyncHandler(controller.delete.bind(controller)));

export default router;
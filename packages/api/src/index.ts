import express, { Router } from "express";
import { VideoController } from "./controller/video-controller";

const router = Router();

const controller = new VideoController();

router.post("/video", controller.add.bind(controller));

export default router;
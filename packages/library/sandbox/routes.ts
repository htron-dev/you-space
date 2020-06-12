import { Router } from "express";
import { createLibrary } from "../src";

const router = Router();

const { uploader, deleteFile, index } = createLibrary("tmp");

const asyncHandler = handler => (req, res, next) => {
    return Promise.resolve(handler(req, res, next)).catch(next);
};

router.post("/videos", uploader.single("file"), (req, res) => {
    if (!req.file) {
        throw new Error("File required");
    }
    res.send("uploaded");
});

router.get("/videos", asyncHandler(async (req, res) => {
    const files = await index();
    return res.json(files);
}));

router.delete("/videos/:fileName", asyncHandler(async (req, res, next) => {
    const { fileName } = req.params;
    await deleteFile(fileName);
    res.send("Deleted");
}));

export default router;
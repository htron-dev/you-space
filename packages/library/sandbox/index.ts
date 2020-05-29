import express from "express";
import serverIndex from "serve-index";
import { createLibrary } from "../src";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded( { extended: false } ));

const { uploader, deleteFile } = createLibrary("tmp");

app.use("/videos", serverIndex("tmp",{ icons: true }));

app.use("/videos", express.static("tmp"));

app.post("/upload", uploader.single("file"), (req, res) => {
    res.send("uploaded");
});

app.delete("/video/:file", async (req, res) => {
    try {
        const { file } = req.params;
        deleteFile(file);
        res.send("deleted");
    } catch (error) {
        throw new Error(error);
    }
});

app.listen(3000, () => console.log("Running in http://localhost:3000"));

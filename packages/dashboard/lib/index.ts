import express from "express";
import cors from "cors";
import * as path from "path";
import routes from "./routes";

export function createDashboard(app: express.Application) {
    // const appPath = path.resolve(__dirname, "..", "client", "dist")
    app.use("/api", routes);
    app.get("/", (req, res) => {
        res.sendFile(path.resolve(__dirname, "..", "client", "public", "index.html"));
    })
    // app.use(cors())
    // app.use(express.static(appPath));
};
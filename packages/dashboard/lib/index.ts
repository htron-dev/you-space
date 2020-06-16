import express from "express";
import path from "path";

export function createDashboard(app: express.Application) {
    app.get("/", (req, res) => {
        res.sendFile(path.resolve(__dirname, "..", "client", "public", "index.html"));
    })
};
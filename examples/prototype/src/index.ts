
import express from "express";
import { createDashboard } from "@youspace//dashboard";

const app = express();

createDashboard(app);


app.get("/api", (req, res) => {
    res.send("Hello from prototype");
});

app.listen(3000)
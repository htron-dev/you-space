import { createDashboard } from "./index";
import express from "express";

const sandbox = express();

createDashboard(sandbox);

sandbox.listen(3000, () => console.log("server runnig"));


import { Router } from "express";
import bodyParser from "body-parser";

import errorHandler from "./error-handler";
import adminRoutes from "./admin.routes";

const router = Router();

router.use(bodyParser.json());

router.use(bodyParser.urlencoded( { extended: false } ));

router.use("/admin", adminRoutes);

router.use(errorHandler);

export default router;
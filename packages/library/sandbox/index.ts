import express from "express";
import bodyParser from "body-parser";

import routes from "./routes";

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded( { extended: false } ));

app.use(routes);

app.use(async (err, req, res, next) => {
    const { message } = err;
    const status = err.status || 500;

    res.status(status).json({
        status,
        message
    });
});


app.listen(3000, () => console.log("Running in http://localhost:3000"));

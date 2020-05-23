import { Router } from "express";

const routes = Router();
const videos = [
    {
        name: "Ursos fazendo coias de urso",
        path: './somegile'
    },
    {
        name: "Gordo fazendo gordise",
        path: './somegile'
    },
];

routes.get("/videos", (req, res) => {
    res.json(videos)
})

export default routes;
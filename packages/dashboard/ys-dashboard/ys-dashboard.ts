import express from "express";
import path from "path";
import fs from "fs";

export default class YsDashborad {
    private route: string;
    public app: express.Application;
    constructor(route: string = "/ys-admin"){
        this.route = route;
        this.app = express();
        this.registerRoutes();
    }
    
    registerRoutes(){
        const currentPath = path.dirname(path.resolve("@ys/dashboard/package.json"));
        // console.log(process.env.PWD)
        // console.log(currentPath)
        // console.log(path.dirname(path.resolve("./")))
        console.log("read")
        // console.log(require('../dist/public/index.html'))
        // console.log(process.cwd())
        // fs.readFileSync(`${process.env.PWD}/dist/public/index.html`)
        if (fs.existsSync(`${process.cwd()}/node_modules/@youspace/dashboard/dist/public`)){
            console.log(fs.readdirSync(`${process.cwd()}//node_modules/@youspace/dashboard/dist/public`))
            this.app.use(this.route, express.static(`${process.cwd()}//node_modules/@youspace/dashboard/dist/public`));
        } else {
            console.log(fs.readdirSync(`${process.cwd()}/dist/public`))
            this.app.use(this.route, express.static(`${process.cwd()}/dist/public`));
        }
        console.log(process.cwd())
        // console.log(path.dirname(__dirname))
        // console.log("[@youspace] dashboard register in ", this.route);
    }
}
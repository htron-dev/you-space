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
        
        if (fs.existsSync(`${process.cwd()}/node_modules/@youspace/dashboard/dist/public`)){            
            this.app.use(this.route, express.static(`${process.cwd()}//node_modules/@youspace/dashboard/dist/public`));
        } else {            
            this.app.use(this.route, express.static(`${process.cwd()}/dist/public`));
        }

        console.info("[@youspace] dashboard register in ", this.route);
    }
}
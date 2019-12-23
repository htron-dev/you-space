import express from "express";
import YsDirectory from "./directory";
import fs from "fs";
import cors from "cors";
import bodyParser from "body-parser";

class YsBoot {
    
    public app: express.Application;
    public directories: YsDirectory;
    
    constructor(){
        this.app = express();
        this.directories = new YsDirectory(process.env.PWD);
        this.setMiddewares();
        this.setRoutes();
    }    

    setMiddewares(){
        this.app.use(cors());
        this.app.use(express.static(`${process.env.PWD}/ys_content/themes/default/dist`));
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
    }

    setRoutes(){
        this.app.get("/video/:name", (req, res) => {
            const { name } = req.params;
            res.sendFile(`${this.directories.getDirectory("uploads")}/${name}`);
        });
        
        this.app.get("/videos-list", (req, res) => {
            fs.readdir(this.directories.getDirectory("uploads"), (err, items: any[]) => {
                if(err){
                    throw err;
                }
        
        
                const videos = items.map(item => {
                    return {
                        name: item
                    }
                });
                res.send(JSON.stringify(videos));
        
            })
        });
    }

}

export default YsBoot;
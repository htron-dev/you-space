import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { ysDirectory, ysDirectoryFactory } from "./index";

/**
 *  Boot the application
 */
export default class YsBoot {
    
    // expresss app
    public app: express.Application;
    // class with all directories of the application
    public directories: ysDirectoryFactory;
    
    constructor() {
        
        // set the app express
        this.app = express();
        
        // Set the app directories
        this.directories = ysDirectory(process.env.PWD);
        
        // registre midewares
        this.registerMiddlewares();
    }

    /**
     * Register all middlewares
     * in the future remove this packages and add in the @youspace/rest
     */
    registerMiddlewares (): void {
        this.app.use(cors());
        this.app.use(express.static(`${this.directories.getDirectory("root")}/ys_content/themes/default/dist`));
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
    }

}

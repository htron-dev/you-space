import express from "express";
import path from "path";
import { exists, mkdir, readdirSync } from "fs";
import {ErrorHandler, InfoLog} from "./";
import multer from "multer";

export default class ysMedia {
    public app: express.Application;
    private storangePath: string;
    private storange: multer.StorageEngine;
    private uploader: multer.Instance;
    
    constructor(folderPath?: string){
        this.app = express();

        // if have folderPath check if is a valid path
        if(folderPath){
            this.validadeFolderPath(folderPath);
        }
        
        // set storange path
        this.storangePath = folderPath || `${process.env.PWD}/upload`;

        // prepare folder path
        this.prepateFolder();

        this.storange = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, this.storangePath);
            },
            filename: (req, file, cb) => {
                cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
            }
        });

        this.uploader = multer({storage: this.storange});        
    }

    validadeFolderPath(folderPath: string){
        if(!path.isAbsolute(folderPath)){
            ErrorHandler("Path invalid", [`Path: ${folderPath}`]);
        }

        exists(folderPath, haveFolder => !haveFolder ? ErrorHandler("Path invalid", [`Path: ${folderPath}`]) : null);
    }
    
    prepateFolder(){
        exists(this.storangePath, haveFolder => {
            if(!haveFolder){
                mkdir(this.storangePath, () => {
                    InfoLog(`[@youspace/upload]: create directory: ${this.storangePath}`);                    
                });
            }
        });
        
    }

    async getListFiles (): Promise<string[]> {
        const files = await readdirSync(this.storangePath);        

        return files;
    }
}

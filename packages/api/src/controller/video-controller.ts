import { Request, Response } from "express";
import { ILibrary } from "@youspace/library";

import ApiLibrary from "./../library";

export class VideoController {
    protected library: ILibrary;

    constructor(library = ApiLibrary){
        this.library = library;
    }

    async index(req: Request, res: Response) {
        const files = await this.library.index();
        return res.json(files);
    }

    add(req: Request, res: Response) {
        const upload = this.library.uploader.single("file");
        upload(req,  res, (err: any) => {
            if (err) {
                throw err;
            }
            if (!req.file) {
                throw new Error("File is required");
            }
            res.send("video added");
        });
    }

    async delete(req: Request, res: Response) {
        const { filename } = req.params;
        await this.library.deleteFile(filename);
        res.send("deleted");
    }
    
}
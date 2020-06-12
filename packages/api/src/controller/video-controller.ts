import { Request, Response } from "express";
import { ILibrary } from "@youspace/library";

import Apilibrary from "./../library";

export class VideoController {
    protected library: ILibrary;

    constructor(library = Apilibrary){
        this.library = library;
    }

    add(req: Request, res: Response) {
        const upload = this.library.uploader.single("file");
        upload(req,  res, (err: any) => {
            if (err) {
                throw err;
            }
            res.send("video added");
        });
    }
    
}
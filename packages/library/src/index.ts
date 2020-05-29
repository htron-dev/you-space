import multer from "multer";
import { promisify } from "util";
import fs from "fs";

export interface ILibrary {
    uploader: ReturnType<typeof multer>,
    deleteFile(file: string): Promise<void>,
}


export function createLibrary(path: string = 'upload/'): ILibrary {
    const storage = multer.diskStorage({
        destination: path,
        filename(req, file, cb){
            cb(null, file.originalname);
        }
    });
    
    const uploader = multer({
        dest: path,
        storage
    });

    async function deleteFile(file: string) {
        return promisify(fs.unlink)(`${path}/${file}`);
    }

    return {
        uploader,
        deleteFile,
    };
}
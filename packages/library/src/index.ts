import multer from "multer";
import { promisify } from "util";
import fs from "fs";
import { ILibrary } from "./types";
import { v4 as uuidV4 } from "uuid";

export function createLibrary(path: string = 'upload'): ILibrary {
    const storage = multer.diskStorage({
        destination: path,
        filename(req, file, cb){
            const fileName = `${uuidV4()}-${file.originalname}`;
            cb(null, fileName);
        }
    });
    
    const uploader = multer({
        dest: path,
        storage
    });

    function deleteFile(file: string) {
        return promisify(fs.unlink)(`${path}/${file}`);
    }

    async function index(){
        const folderExist = await promisify(fs.exists)(path);
        if (!folderExist) {
            throw new Error("No files")
        }
        return await promisify(fs.readdir)(path);
    }

    return {
        uploader,
        deleteFile,
        index
    };
}
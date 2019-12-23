import path from "path";

export type DirectoryNames = "uploads" | "root";

export type AppDirectories = {
    root: string,
    uploads: string
}

export default class YsDirectory {
    private directories: AppDirectories;
    constructor(rootPath: string | undefined){

        if(!rootPath){
            throw new Error("Can't find root path");
        }

        this.directories = {
            root: rootPath,
            uploads: `${rootPath}/ys_content/uploads`
        };
    }

    getDirectory(directory: DirectoryNames){
        return this.directories[directory];
    }
}
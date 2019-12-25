import path from "path";
import { AppDirectories, DirectoryNames, ysDirectoryFactory } from "./index";


/**
 *  Handle the directories of application
 */
export function ysDirectory(rootPath?: string): ysDirectoryFactory {
    
    // if is undefined trigger a error
     if(!rootPath){
        throw new Error("Can't find root path");
    }
    
     // set the directories paths
     const directories: AppDirectories = {
        root: rootPath,
        uploads: `${rootPath}/ys_content/uploads`
    };

    /**
     * Get a directory paths by name
     * @param directory name of directory
    */
    function getDirectory(directory: DirectoryNames){
        return directories[directory];
    }

    return {
        getDirectory
    }
}
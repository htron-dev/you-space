// avaliable directories names
export type DirectoryNames = "uploads" | "root";

// avaliable directories
export type AppDirectories = {
    root: string,
    uploads: string
}

// ysDirectory Factory
export interface ysDirectoryFactory{
    getDirectory(string: DirectoryNames): string
}
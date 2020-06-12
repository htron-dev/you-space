import multer from "multer";

export interface ILibrary {
    uploader: ReturnType<typeof multer>,
    index(): Promise<string[]>,
    deleteFile(file: string): Promise<void>,
}
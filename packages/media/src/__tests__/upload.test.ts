import YsMedia from "./../";
import path from "path";
import fs from "fs";
import {expect} from "chai";

describe('@youspace/upload -> index.js', () => {
    const files: string[] = [
        "file-1",
        "file-2",
        "file-3",
        "file-4",
    ];

    before("create default data", () => {
        fs.mkdir(path.resolve(__dirname, "upload"), () => {
            fs.exists(path.resolve(__dirname, "upload"), exists => {            
                expect(exists).to.be.true;
                
                files.forEach(file => {
                    fs.writeFile(`${path.resolve(__dirname, "upload")}/${file}.txt`, file , () => {});
                })
            });     
        });
    });

    after("remove all created folders", () => {
        // remove created dir        
        fs.rmdir(path.resolve(__dirname, "upload"), () => {});
    });

    it('should create a instance of app with a valid path', () => {
        // use current path
        const app = new YsMedia(path.resolve(__dirname, ""));
        
        expect(app).to.be.instanceOf(YsMedia);
    });
    
    it('should if not pass the folder directory create a folder in root project if not exist', () => {
    
        console.info = () => {};

        const app = new YsMedia();
        setTimeout( () => {
            fs.exists(`${process.env.PWD}/upload`, exists => {            
                
                expect(exists).to.be.true;
                
                fs.rmdir(`${process.env.PWD}/upload`, () => {});
            });

        } , 2000)

    });
    
    it('should list the files of the folder', async () => {
        // use current path
        const ysUpload = new YsMedia(path.resolve(__dirname, "upload"));
        
        const folderFiles = await ysUpload.getListFiles();

        expect(folderFiles.length).to.be.equal(files.length);

    });

});

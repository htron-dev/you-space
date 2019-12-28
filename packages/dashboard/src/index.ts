import express from "express";
import path from "path";
import fs from "fs";
import { Sections } from "./types";


export default class YsDashborad {
    private route: string;
    public app: express.Application;
    private sections: Sections[];

    constructor(route: string = "/ys-admin"){
        this.route = route;
        this.app = express();
        this.sections = [
            {
                name: "teste",
                js: [
                    {

                        name: "vue",
                        url: "https://cdn.jsdelivr.net/npm/vue/dist/vue.js"
                    },
                    {

                        name: "app.js",
                        path: "/home/henrique/Documents/Trabalho/jobs/atual/exati/tabs-vuex/dist/bundle.js"
                    },
                ]
            }
        ]
        this.registerRoutes();
    }

    public resgisterSections(section: any){
        this.sections.push(section);
    }
    
    private registerRoutes (): void { 

        this.setSections();
        
        if (fs.existsSync(`${process.cwd()}/node_modules/@youspace/dashboard/dist/public`)){            
            this.app.use(this.route, express.static(`${process.cwd()}//node_modules/@youspace/dashboard/dist/public`));
        } else {            
            this.app.use(this.route, express.static(`${process.cwd()}/dist/public`));
        }

        console.info("[@youspace] dashboard register in ", this.route);
    }

    private setSections (): void {
        this.app.get("/ys-json/dashboard/sections", (req, res) => {
            res.send(JSON.stringify(this.sections));
        });
        this.app.get("/ys-json/dashboard/sections/:name", (req, res) => {
            const { name } = req.params;
            
            const section = this.sections.find(s => s.name === name);

            if(!section){
                throw new Error("Section not founded");
            }

            
            res.send(JSON.stringify(section));

        });

        this.app.get("/ys-json/dashboard/sections/:sectionName/js/:fileName", (req, res) => {
            const { fileName, sectionName } = req.params;
            
            const section = this.sections.find(s => s.name === sectionName);
            if(!section){
                throw new Error("Section not founded");
            }

            if(!section.js){
                throw new Error("NO JS")
            }
            
            const file = section.js.find(j => j.name == fileName)
            if(!file){
                throw new Error("NO FILE FOUND")
            }

            console.log(section)
            console.log(file)

            if(!file.path){
                throw new Error("NO PATH")
            }

            
            res.sendFile(file.path);
        });
    }
}
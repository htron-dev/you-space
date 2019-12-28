export type SectionsJSFiles = {
    name: string,
    path?: string,
    url?: string,
}

export type Sections = {
    name: string;
    description?: string,
    js?: SectionsJSFiles[],
    menu?: {
        icon: string,
        text: string
    },    
}
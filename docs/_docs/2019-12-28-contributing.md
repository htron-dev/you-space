---
    layout: page
    name: contributing
    permalink: docs/contributing
---

The project is in early development so stil do not have a good way to setup an enviroment development.

But you can clone the main repository and take a look in the packages


* 1 - First step clone the main repository in [you-space](https://github.com/hawk-developments/you-space)

* 2 - Link the package you wanna use to another project
Example:

```
    npm link <path to youspace>/packages/media
```

* 3 - use import and you ready to use the package

```
   import YsMedia from "@youspace/media"
   import express from "express"
   
   cons app = express();
   cons media = YsMedia("uploads");

   app.use(media.app);
   
   app.get("/videos", (req, res) => {
        
        const videos = media.getFiles() # <- get all the files in folder of uploads
        
        res.send(JSON.stringify(videos));
   });

   app.listen(3000, () => {
       conso.log("Server running")
   })


```



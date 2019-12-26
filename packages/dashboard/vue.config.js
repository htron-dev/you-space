const path = require("path");

module.exports = {
    outputDir: path.resolve(__dirname, "dist/public"),
    publicPath: "./",// process.env.NODE_ENV === "production" ? "./" : "/",
    lintOnSave: process.env.NODE_ENV !== "production"
};

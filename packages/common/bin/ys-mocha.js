#!/usr/bin/env node

const shelljs = require("shelljs");
const path = require("path");

/**
 *  Get command line args
 * 
 *  @example
 *  ys-mocha teste __tests_/
 *  will be: args = ["teste", "__tests_/"]
 */
function getArgs(){
    return process.argv.slice(2);
}
/**
 *  Get the current path of this package
 *  @example
 *  node_modules/@youspace/common
 */
function getCurrentPath(){
    return path.resolve(__dirname, "./../");
}

/**
 *  Main function to run the commands
 */
function run(){

    const args = getArgs();
    
    // path of the mocha bin command
    const mochaPath = `${getCurrentPath()}/node_modules/.bin/mocha`;
    
    /**
     * loop in the command line args to add the to mocha command
     * @example ys-mocha -w tests.ts
     * output will be "-w tests.ts"
     */ 
    let mochaOptions = "";
    
    args.forEach(arg => mochaOptions += ` ${arg}`);

    // execute the command using ts-node package to copile ts files and using the tsconfig.json of this package
    const command = `TS_NODE_PROJECT="${getCurrentPath()}/tsconfig.json" ${mochaPath} --colors --watch-extensions ts -r ${getCurrentPath()}/node_modules/ts-node/register ${mochaOptions}`;

    shelljs.exec(command)
        
}
// call the function
run();

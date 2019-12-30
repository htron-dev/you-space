#!/usr/bin/env node

const shelljs = require("shelljs");
const path = require("path");

/**
 * Get command line args
 * 
 * @example
 * ys-mocha teste __tests_/
 * args[0] = teste
 * args[1] = __tests_/
 */
function getCurrentPath(){
    return path.resolve(__dirname, "./../");
}
function getArgs(){
    return process.argv.slice(2);
}

function run(){

    const args = getArgs();
    
    const mochaPath = `${getCurrentPath()}/node_modules/.bin/mocha`;

    let mochaOptions = "";
    args.forEach(arg => mochaOptions += ` ${arg}`);    

    const command = `TS_NODE_PROJECT="${getCurrentPath()}/tsconfig.json" ${mochaPath} --colors --watch-extensions ts -r ${getCurrentPath()}/node_modules/ts-node/register ${mochaOptions}`;
    // console.log(command)

    const testsPath = `${process.env.PWD}/${args[0]}`;    

    shelljs.exec(command)
        
}

run();
#!/usr/bin/env node

const shelljs = require("shelljs");
const path = require("path");
const ysMocha = require("./ys-mocha");
const ysLint = require("./ys-lint");

/**
 *  Get command line args
 * 
 *  @example
 *  ys-service test __tests_/
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
 *  Get the first argument and look for look for a service that have the same name, if not trigger a error
 *  @example
 *  ```shell
 *      ys-service test __test_/* <- run mocha in the directory
 *      ys-service lint src/* <- run eslint in the directory
 *  ```
 *  =============================================================================================
 */
function run(){

    const args = getArgs();
    
    const services = {
        "test": ysMocha,
        "lint": ysLint
    };

    if (services[args[0]]){
        const service = services[args[0]];
        
        args.splice(0, 1);

        const command = service(getCurrentPath(), args);

        shelljs.exec(command);
    } else {
        console.log('\x1b[31m%s\x1b[0m',`Invalid command ${args[0]}`);
    }    
   
}

// call the function
run();

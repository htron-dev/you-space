#!/usr/bin/env node

import shelljs from "shelljs";
import ysMocha from "./ys-mocha";
import ysLint from "./ys-lint";
import { Services } from "./types";

/**
 *  Get command line args
 *
 *  @example
 *  ys-service test __tests_/
 *  will be: args = ["teste", "__tests_/"]
 */
function getArgs(): string[]{
    return process.argv.slice(2);
}
/**
 *  Get the current path of this package
 *  @example
 *  node_modules/@youspace/common
 */
function getBinPath(): string{
    const binPath = shelljs.exec("npm bin", {silent: true}).stdout.replace("\n", "");
    return binPath;
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
function run(): void{

    const args = getArgs();

    const services: Services = {
        "test": ysMocha,
        "lint": ysLint
    };

    if (services[args[0]]){
        const service = services[args[0]];

        args.splice(0, 1);

        const command = service(getBinPath(), args);

        shelljs.exec(command);
    } else {
        console.error("\x1b[31m%s\x1b[0m",`Invalid command ${args[0]}`);
    }

}

// call the function
run();

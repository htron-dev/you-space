#!/usr/bin/env node

/**
 *  Service to run tests
 *  This is just a layer of mocha to resolve the ts-node dependence
  *  ys-service test [mochaOptions]
 *  @example
 * ```shell
 *  ys-service test __tests__/* <- run mocha in the directory
 *  ys-service test __tests__/* --reporter list --slow 500 <- run mocha in the directory and report tests with time <=500ms
 * ```
 */

import path from "path";

export default function (binPath: string, args: string[]): string {

    // get the path mocha bin command
    const mochaPath = `${binPath}/mocha`;

    // get the path of ts-node-module
    const tsNodeModule = path.resolve(binPath, "../");

    /**
     * loop in the command line args to add the to mocha command
     * @example ys-service test -w tests.ts
     * output will be "-w tests.ts"
     */
    let mochaOptions = "";

    args.forEach(arg => mochaOptions += ` ${arg}`);

    // execute the command using ts-node package to copile ts files and using the tsconfig.json of this package
    const command = `TS_NODE_PROJECT="${path.resolve(__dirname, "../")}/tsconfig.common.json" ${mochaPath} --colors --watch-extensions ts -r ${tsNodeModule}/ts-node/register ${mochaOptions}`;

    return command;

}
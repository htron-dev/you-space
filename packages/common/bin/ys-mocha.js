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

module.exports = function (currentPath, args){    
    
    // get the path mocha bin command
    const mochaPath = `${currentPath}/node_modules/.bin/mocha`;
    
    /**
     * loop in the command line args to add the to mocha command
     * @example ys-service test -w tests.ts
     * output will be "-w tests.ts"
     */ 
    let mochaOptions = "";
    
    args.forEach(arg => mochaOptions += ` ${arg}`);

    // execute the command using ts-node package to copile ts files and using the tsconfig.json of this package
    const command = `TS_NODE_PROJECT="${currentPath}/tsconfig.json" ${mochaPath} --colors --watch-extensions ts -r ${currentPath}/node_modules/ts-node/register ${mochaOptions}`;

    return command;    
        
}
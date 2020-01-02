/**
 *  Service to run eslint
 *  This is just a layer of eslint to resolve the @typescript/eslint plugin
 *  ys-service lint [eslintOptions]
 *  @example
 * ```shell
 *  ys-service lint src/* <- run eslint in the directory
 *  ys-service lint --format codeframe src/* <- run eslint in the directory with format codeframe
 * ```
 */

 module.exports = function (currentPath, args) {
     const lintPath = `${currentPath}//node_modules/.bin/eslint`
     /**
     * loop in the args to add the to final command
     */ 
    let eslintOptions = "";
    
    args.forEach(arg => eslintOptions += ` ${arg}`);
    
    // create a string ofr the command
    const command = `${lintPath} --color --resolve-plugins-relative-to=${currentPath} ${eslintOptions}`;
    console.log(command)

    return command;
 }
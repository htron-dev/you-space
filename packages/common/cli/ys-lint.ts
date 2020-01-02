#!/usr/bin/env node

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

import path from "path";

export default function (binPath: string, args: string[]): string{

    const lintPath = `${binPath}/eslint`;

    /**
     * loop in the args to add the to final command
     */
    let eslintOptions = "";

    args.forEach(arg => eslintOptions += ` ${arg}`);
    // create a string ofr the command
    const command = `${lintPath} --color --resolve-plugins-relative-to=${path.resolve(binPath, "../")} ${eslintOptions}`;

    return command;
}
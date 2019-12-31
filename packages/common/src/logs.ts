import pino from "pino";
import debug from "debug";

/**
 * Static Class to show info logs and debug logs level
 * @example
 * ```ts
 *    import { ysLogger } from "@youspace/common";
 *
 *    // normal info log
 *    ysLogger.info("Log something");
 *
 *    // logs in debug level
 *    ysLogger.debug("Log just in debug", "youspace:common"); *
 * ```
 */
export class ysLogger {        

    public static info(message: string): void{
        const logger = pino();        
        logger.info(message);
    }    
    public static debug(message: string, module: string = "youspace:"): void{        
        const log = debug(module)
        log(message)
    }

}
/**
 * Error class to show custom errors
 * @example
 * ```ts
 *  import { ysError } from "@youspace/common";
 * 
 *  const error = new ysError("Some Error message");
 *
 *  throw error;
 * ```
 */
export class ysError extends Error {
    constructor (message: string) {
        super(message);        
    }    
}

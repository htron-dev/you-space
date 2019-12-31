import pino from "pino";
import debug from "debug";

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

export class ysError extends Error {
    constructor (message: string) {
        super(message);        
    }    
}
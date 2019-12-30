import pino from "pino";
import debug from "debug";

export class ysLog {        

    public static info(message: string): void{
        const logger = pino();        
        logger.info(message);
    }    
    public static debug(message: string, module: string): void{        
        const log = debug(module)
        log(message)
    }

}

export class ysError {
    constructor (message: string, module?: string) {        
        const error = new Error(message);
        throw error;
    }    
}
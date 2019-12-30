import { expect } from "chai";
import sinon from "sinon";
import pino from "pino";
import { ysLog, ysError } from "../src";

describe('@youspace/common log.ts', () => {

    it('should call info log', () => {        
        
        const ysInfo = sinon.stub(ysLog, "info");            
        
        ysLog.info("teste");

        expect(ysInfo.calledOnce).to.be.true;        
                
    });

    it('should call debug log', () => {
        
        const debug = sinon.stub(ysLog, "debug");
                
        ysLog.debug("teste", "youspace:common");  

        expect(debug.calledOnce).to.be.true;        
        
    });
    
    it('should throw a exeption', () => {

        // const stub = sinon.stub(Error);

        // console.log(ysError.bind("some error message"));

        expect(() => new ysError("some error message")).to.throw("some error message");  
                     
        
    });
    
    
});

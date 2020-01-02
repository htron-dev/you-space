import { expect } from "chai";
import sinon from "sinon";
import { ysLogger, ysError } from "../src";

describe("@youspace/common log.ts", () => {

    it("should call info log", () => {

        const ysInfo = sinon.stub(ysLogger, "info");

        ysLogger.info("teste");

        expect(ysInfo.calledOnce).to.be.true;

    });

    it("should call debug log", () => {

        const debug = sinon.stub(ysLogger, "debug");

        ysLogger.debug("teste", "youspace:common");

        expect(debug.calledOnce).to.be.true;

    });

    it("should throw a exeption", () => {

        const error = () => {throw new ysError("some error message");};

        expect(error).to.throw("some error message");


    });


});

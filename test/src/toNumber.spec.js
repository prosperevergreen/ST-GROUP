import pkg from "chai";
import chai from "chai";
const { expect } = pkg;
const assert = chai.assert;

import toNumber from "../../src/toNumber.js";

describe("Unit Testing - Tonumber.js",()=> {
    it("Testcase 1", function(){
        const answer = toNumber(3.2);
        expect(answer).to.deep.equal(3.2);
    });
   
    it("TestCase 4",function(){
        const answer = toNumber('3.2');
        expect(answer).to.deep.equal(3.2);
    });
    it("TestCase 3", function(){
        const answer = toNumber(Infinity);
        expect(answer).to.deep.equal(Infinity);
    });
    it("TestCase 2",function(){
        const answer = toNumber(Number.MIN_VALUE);
        expect(answer).to.deep.equal(5e-324);
    });
  
});
import pkg from "chai";
import chai from "chai";
const { expect } = pkg;
const assert = chai.assert;

import isLength from "../../src/isLength.js"

describe("Unit Testing - length of fuction",()=> {
    it("First case", function(){
    const result = isLength(3);
    assert.equal(result, true);
    });
    it("Second case",function(){
        const result = isLength(Number.MIN_VALUE);
        assert.equal(result, false);
    });
    it("Third case", function(){
        const result = isLength(Infinity);
        assert.equal(result, false);
    });
    it("Fourth case",function(){
        const result = isLength('3');
        assert.equal( result,false);
    });
});
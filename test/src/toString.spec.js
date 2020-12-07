import pkg from 'chai';
import chai from 'chai';
const {expect} = pkg;
const assert = chai.assert;

import toString from "../../src/toString.js";

describe("toString- Unit Testing",()=> {
    it("First", function(){
        const result = toString(null);
        //console.log(result);
        assert.equal(result,'null');
    });
    it("Second",function(){
        const result = toString(-0);
        assert.equal(result,'-0');
    });
    it("Third", function(){
        const result = toString([1, 2, 3]);
        assert.equal(result,'1,2,3');
    });
});
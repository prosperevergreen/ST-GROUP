import pkg from 'chai';
import chai from 'chai';
const {expect} = pkg;
const assert = chai.assert;

import upperFirst from "../../src/upperFirst.js";

describe("Upper First unit testing",()=> {
    it("First", function(){
        const result = upperFirst('loyad');
        assert.equal( result, 'Loyad');
    });
    it("Second",function(){
        const result = upperFirst('LOYAD');
        assert.equal( result, 'LOYAD');
    });
});
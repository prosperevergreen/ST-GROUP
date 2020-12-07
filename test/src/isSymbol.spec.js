import pkg from "chai";
import chai from "chai";
const { expect } = pkg;
const assert = chai.assert;

import isSymbol from "../../src/isSymbol.js";

describe("IsSymbol.js - Unit Testing",()=> {
    it("First scenario", function(){
    const result = isSymbol(Symbol.iterator);
    assert.equal( result, true);
    });
    it("Second scenario",function(){
        const result = isSymbol('abc');
        assert.equal(result, false);
    });
});
import pkg from "chai";
import chai from "chai";
const { expect } = pkg;
const assert = chai.assert;

import eq from "../../src/eq.js";

describe("Type equality Testing",()=>{
    it("Checking two elements of same type", function(){
    const result = eq('a','a');
    expect(result).to.equal(true);
    });
    it("Checking two elements of same type 1",function(){
        const result = eq(1,1);
        expect(result).to.equal(true);
        
    });
    it("Checking two elements with different type ",function(){
        const result = eq('a',parseInt('a'));
        expect(result).to.equal(false);
        
    });

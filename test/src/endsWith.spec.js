import pkg from 'chai';
import chai from 'chai';
const {expect} = pkg;
const assert = chai.assert;


import endsWith from "../../src/EndsWith.js";

describe("endswith unit Testing",()=>{
    it("Checking an element in String without index", function(){
    const result = endsWith('qwe', 'e');
    assert.equal(result,true);
    });
    it("Checking an element with fasle",function(){
        const result = endsWith('qwe', 'q');
        assert.equal(result,false);
        
    });
    it("Checking an element with index ",function(){
        const result = endsWith('qwe', 'q',1);
        assert.deep.equal(result,true);
        
    });
   
   
        


    });
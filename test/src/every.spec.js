import pkg from 'chai';
import chai from 'chai';
const {expect} = pkg;
const assert = chai.assert;

import every from "../../src/every.js";

describe("every testing",()=>{
    it("Checking type", function(){
    const result = every([true, 1, null, 'yes'], Boolean)
    assert.equal(result,false);
    });
    it("Checking empty elements",function(){
        const result = every([], Boolean)
        assert.equal(result,true);
        
    });
    it("Checking true elements",function(){
        const result = every([1,2,3,4], Boolean)
        assert.equal(result,true);
        
    });
   
   
        


    });
import pkg from 'chai';
import chai from 'chai';
const {expect} = pkg;
const assert = chai.assert;


import endsWith from "../../src/EndsWith.js";

describe("Endswith - Unit Testing",()=>{
    it("Checking element index", function(){
    const result = endsWith('wxy', 'y');
    expect(result).to.equal(true);
    });
    it("Checking an element false case",function(){
        const result = endsWith('wxy', 'w');
        expect(result).to.equal(false);
        
    });
    it("Checking an element  index ",function(){
        const result = endsWith('wxy', 'w',1);
        expect(result).to.deep.equal(true);
        
    });
   
   
        


    });
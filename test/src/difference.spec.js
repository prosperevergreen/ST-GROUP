import pkg from 'chai';
const {expect} = pkg;

import difference from "../../src/difference.js";

describe("Difference",()=>{
    it("Return type 1", function(){
    const result = difference([3,4],[2,3]);
    
    expect(result).to.deep.equal([4]);
    });
    it("Return type error",function(){
        const result = difference([3,4],[2,3,1]);
       
        expect(result).to.deep.equal([4]);
        
     });
    
        


    });
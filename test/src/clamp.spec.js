import pkg from 'chai';
const expect = pkg.expect;

import clamp from "../../src/clamp.js"

describe("Clamp", () => {
    it("First case", function(){
    const result1 = clamp(-4,-5,10);
    expect(result1).to.equal(-5);
    });
    it("Second case",function(){
        const result2 = clamp(11,-5,10);
        expect(result2).to.equal(-5);
        
    });
    it("Third case ",function(){
        const result3 = clamp(-3,-4,5);
        expect(result3).to.equal(-4);
        
    });
   
    it("Fourth case ",function(){
        try{
            const result = clamp(-3,undefined,undefined);
           console.log(result);
        }catch(e){
            console.log(e);
        }
        });
        


    });
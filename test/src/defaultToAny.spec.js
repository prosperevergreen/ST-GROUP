import pkg from 'chai';
const {expect} = pkg ;

import defaultToAny from "../../src/defaultToAny.js";

describe("unit testing - DefaultToAny",()=>{
    it("Normal cases", function(){
    const result = defaultToAny(2,5,6);
    expect(result).to.equal(2);
    });
    it("False cases 1",function(){
    const result1 = defaultToAny(undefined,5,10);
    expect(result1).to.equal(5);
    });
    it("False case 2",function(){
        const result2 = defaultToAny(null,undefined,10);
        expect(result2).to.equal(10);
        });
        it("False case 3",function(){
            const result2 = defaultToAny(null,undefined,NaN);
            expect(result2).to.deep.equal(NaN);
            });
    

    });

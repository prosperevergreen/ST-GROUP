import pkg from 'chai' ;
const {expect} = pkg;

import defaultTo from  "../../src/defaultTo.js" ;

describe("Default Values",()=>{
    it("normal cases", function(){
    const result = defaultTo(2,5);
    expect(result).to.equal(2);
    });
    it("false", function() {
    const result1 = defaultTo (5) ;
    expect (result1).to.equal(5);
    });
   
//  it("Default for falsy case 2",function(){
//             const result2 = defaultTo(null,undefined);
//             expect(result2).to.equal(null);
//             });

     });
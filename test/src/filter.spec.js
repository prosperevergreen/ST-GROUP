import pkg from 'chai';
import chai from 'chai';
const {expect} = pkg;
const assert = chai.assert;

import filter from "../../src/filter.js"

const users = [
    { 'user': 'john', 'active': true },
   { 'user': 'tom',   'active': false }
  ];
 
describe("Filter - Unit testing",()=>{
 it("First", function(){
 const result = filter(users, ({ active }) => active);
 console.log(result);
 expect(result).to.deep.equal([ { user: 'john', active: true } ]);
 });
 it("Second",function(){
     const result = filter(users, ({ active }) => !active);
     console.log(result);
     expect(result).to.deep.equal([ { user: 'tom', active: false } ]
     );
    
 });
 
     
 });

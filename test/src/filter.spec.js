import pkg from 'chai';
import chai from 'chai';
const {expect} = pkg;
const assert = chai.assert;

import filter from "../../src/filter.js"

const users = [
    { 'user': 'john', 'active': false },
   { 'user': 'snow',   'active': true }
  ];
 
describe("Filter testing",()=>{
 it("first", function(){
 const result = filter(users, ({ active }) => active);
 console.log(result);
 assert.equal( result ,[ { user: 'john', active: false } ]);
 });
 it("second",function(){
     const result = filter(users, ({ active }) => !active);
     console.log(result);
     assert.equal(result, [ { user: 'snow', active: true } ]
     );
    
 });
 
     
 });
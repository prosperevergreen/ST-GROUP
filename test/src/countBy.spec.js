import pkg from 'chai';
const {expect} = pkg;

import countBy from "../../src/countBy.js" ;

const users = [
    { 'user': 'barney', 'active': true },
     { 'user': 'betty', 'active': true },
     { 'user': 'fred', 'active': false }
   ];
  
describe("Countby integration testing",()=>{
  it("Return a new object with active and inactive users", function(){
  const result = countBy(users,value => value.active);
  expect(result).to.deep.equal({'true':1,'false':0});
  });
  it("Return a new object with missing keys",function(){
      const result = countBy(users,value => undefined);
      expect(result).to.deep.equal({'undefined':2});
      
  });
  
      


  });
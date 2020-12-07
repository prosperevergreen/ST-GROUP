import pkg from 'chai';
const expect = pkg.expect;
//const {expect,assert} = require('chai');
import at from "../../src/at.js"
//const fs = require("../add");
const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }
describe ("at",() => {
    it("Creates an array of values corresponding to `paths` of `object`", function(){
    const result = at(object,['a[0].b.c', 'a[1]']);
    expect(result).to.deep.equal([3,4]);
    });
    it("Creates an array of values corresponding to `paths` of `object`",function(){
    const result1 = at(object,['a[0].b.c', 'a[2]']);

    expect(result1).to.deep.equal([3,undefined]);
    });
    it(" throws error",function(){
     try {const result = at(object,['a[0].b.c', NaN]);
    console.log(result);}
    catch(e){
        console.log(e);
    }



     });
});
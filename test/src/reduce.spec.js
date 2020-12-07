import pkg from "chai";
import chai from "chai";
const { expect } = pkg;
const assert = chai.assert;

import reduce from "../../src/reduce.js";

describe("Testcase Reduce - Unit Testing",()=> {
    it("Testcase 1", function(){
        const reducecase = reduce([1, 2], (sum, n) => sum + n, 0);
    expect(reducecase).to.deep.equal( reducecase, 3);
    });
    it("Testcase 2",function(){
        const reducecase = reduce({ 'a': 1, 'b': 2, 'c': 1 }, (reducecase, value, key) => {
            (reducecase[value] || (reducecase[value] = [])).push(key)
            return reducecase
          }, {});
        expect(reducecase).to.deep.equal({ '1': ['a', 'c'], '2': ['b'] });
    });
});
import pkg from "chai";
import chai from "chai";
const { expect } = pkg;
const assert = chai.assert;

import keys from "../../src/keys.js";

let ans = ['0','1']

describe("Unit testing - Keys.js",()=> {
    it("First scenario", function(){
    const result = keys({});
    expect(result).to.deep.equal([]);
    });
    it("Second scenario",function(){
        const result = keys('hi');
        expect(result).to.deep.equal(ans);
    });
});
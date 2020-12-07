import pkg from 'chai';
import chai from 'chai';
const {expect} = pkg;
const assert = chai.assert;

import words from "../../src/words.js";

describe("Words unit testing",()=> {
    it("First", function(){
        const result = words('1, 2, 3');
        expect(result).to.deep.equal(['1', '2','3']);
    });
    it("Second",function(){
        const result = words('1, 2, 3', /[^, ]+/g);
        expect(result).to.deep.equal(['1', '2','3']);
    });
});
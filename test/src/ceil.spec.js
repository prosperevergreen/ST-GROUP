import pkg from 'chai';
const expect = pkg.expect;

import ceil from "../../src/ceil.js";

describe("ceil.js test cases", () => {
    it("should Computes number rounded up to precision" , () =>  {
      const Result = ceil(4.356);
      //console.log(Result);
      expect(Result).be.equal(5);

    });

});

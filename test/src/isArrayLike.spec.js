import pkg from 'chai';
const {expect} = pkg;

import isArrayLike from "../../src/isArrayLike.js";

describe("isArrayLike.js test cases", () => {
	it("Should checks if `value` is array-like.", () => {

        const testCases = [
			{ test: [1, 2, 3], result: true },
			{ test: Function, result: false },
			{ test: 'abc', result: true },
        ];
        
		testCases.map((testCase) => {
			expect(isArrayLike(testCase.test)).to.equal(testCase.result);
		});
	});
});

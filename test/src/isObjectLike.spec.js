import pkg from 'chai';
const {expect} = pkg;

import isObjectLike from "../../src/isObjectLike.js";

describe("isObjectLike.js Unit test cases", () => {
	it("Should checks if `value` is object-like.", () => {

        const testCases = [
			{ test: {}, result: true },
			{ test: [1, 2, 3], result: true },
			{ test: Function, result: false },
			{ test: null, result: false },
			{ test: 'a', result: false },
			{ test: 3 , result: false },
        ];
        
		testCases.map((testCase) => {
			expect(isObjectLike(testCase.test)).to.equal(testCase.result);
		});
	});
});

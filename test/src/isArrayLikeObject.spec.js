import pkg from 'chai';
const {expect} = pkg;

import isArrayLikeObject from "../../src/isArrayLikeObject.js";

describe("isArrayLikeObject.js test cases", () => {
	it("Should checks if `value` is array-like. except that it also checks if `value` is an object.", () => {

        const testCases = [
			{ test: [1, 2, 3], result: true },
			{ test: Function, result: false },
			{ test: 'abc', result: false },
        ];
        
		testCases.map((testCase) => {
			expect(isArrayLikeObject(testCase.test)).to.equal(testCase.result);
		});
	});
});

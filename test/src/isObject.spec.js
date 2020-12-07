import pkg from 'chai';
const {expect} = pkg;

import isObject from "../../src/isObject.js";

describe("isObject.js Unit test cases", () => {
	it("Should checks if `value` is of type `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)", () => {

        const testCases = [
			{ test: {}, result: true },
			{ test: [1, 2, 3], result: true },
			{ test: Function, result: true },
			{ test: null, result: false },
			{ test: 'a', result: false },
			{ test: 3 , result: false },
        ];
        
		testCases.map((testCase) => {
			expect(isObject(testCase.test)).to.equal(testCase.result);
		});
	});
});

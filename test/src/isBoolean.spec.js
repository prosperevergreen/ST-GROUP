import pkg from 'chai';
const {expect} = pkg;

import isBoolean from "../../src/isBoolean";

describe("isBoolean.js test cases", () => {
	it("Should checks if `value` is classified as a boolean primitive or object.", () => {

        const testCases = [
			{ test: true, result: true },
			{ test: false, result: true },
			{ test: null, result: false },
			{ test: "foobar", result: false },
			{ test: 1, result: false },
        ];
        
		testCases.map((testCase) => {
			expect(isBoolean(testCase.test)).to.equal(testCase.result);
		});
	});
});

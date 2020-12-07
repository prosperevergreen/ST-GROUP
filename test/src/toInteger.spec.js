import pkg from 'chai';
const {expect} = pkg;

import toInteger from "../../src/toInteger.js";

describe("toInteger.js Unit test cases", () => {
	it("Should converts `value` to an integer.", () => {

        const testCases = [
			{ test: -3.2, result: -3 },
			{ test: 0.5, result: 0 },
			{ test: Number.MIN_VALUE, result: 0},
			{ test: Number.POSITIVE_INFINITY, result: 1.7976931348623157e+308 },
			{ test: '3.2', result: 3 },
        ];
        
		testCases.map((testCase) => {
			expect(toInteger(testCase.test)).to.equal(testCase.result);
		});
	});
});

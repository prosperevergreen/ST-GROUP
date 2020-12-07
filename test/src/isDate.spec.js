import pkg from 'chai';
const {expect} = pkg;

import isDate from "../../src/isDate.js";

describe("isDate.js Unit test cases", () => {
	it("Should checks if `value` is classified as a `Date` object.", () => {

        const testCases = [
			{ test: new Date, result: true },
			{ test: "Mon April 23 2012", result: false },
        ];
        
		testCases.map((testCase) => {
			expect(isDate(testCase.test)).to.equal(testCase.result);
		});
	});
});

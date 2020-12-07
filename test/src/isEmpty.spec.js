import pkg from 'chai';
const {expect} = pkg;

import isEmpty from "../../src/isEmpty.js";

describe("isEmpty.js Unit test cases", () => {
	it("Should checks if `value` is an empty object, collection, map, or set.", () => {

        const testCases = [
			{ test: null, result: true },
			{ test: "", result: true },
			{ test: [], result: true },
			{ test: {}, result: true },
			{ test: 'abc', result: false },
			{ test: [1, 2, 3], result: false },
			{ test: { 'a': 1 }, result: false },
        ];
        
		testCases.map((testCase) => {
			expect(isEmpty(testCase.test)).to.equal(testCase.result);
		});
	});
});

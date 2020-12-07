import pkg from "chai";
const { expect } = pkg;

import slice from "../../src/slice.js";

describe("slice.js Unit test cases", () => {
	it("Should create a slice of `array` from `start` up to, but not including, `end`.", () => {
        
        const testCases = [
			{ test: { arr: [1, 2, 3, 4, 5], start: 2, end: undefined }, result: [3, 4, 5] },
			{ test: { arr: [1, 2, 3, 4, 5], start: 1, end: 3 }, result: [2, 3] },
			{ test: { arr: [1, 2, 3, 4, 5], start: 3, end: 4 }, result: [4] },
		];

		testCases.map((testCase) => {
			expect(slice(testCase.test.arr, testCase.test.start, testCase.test.end)).to.deep.equal(testCase.result);
		});
	});
});

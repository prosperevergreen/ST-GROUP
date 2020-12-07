import pkg from "chai";
const { expect } = pkg;

import drop from "../../src/drop.js";

describe("drop.js Unit test cases", () => {
	it("Should create a slice of `array` with `n` elements dropped from the beginning.", () => {
		const testCases = [
			{ test: { arr: [1, 2, 3], index: undefined }, result: [2, 3] },
			{ test: { arr: [1, 2, 3], index: 2 }, result: [3] },
			{ test: { arr: [1, 2, 3], index: 5 }, result: [] },
			{ test: { arr: [1, 2, 3], index: 0 }, result: [1, 2, 3] },
		];

		testCases.map((testCase) => {
			expect(drop(testCase.test.arr, testCase.test.index)).to.deep.equal(testCase.result);
		});
	});
});

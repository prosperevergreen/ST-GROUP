import pkg from "chai";
const { expect } = pkg;

import map from "../../src/map.js";

describe("map.js Unit test cases", () => {
	it("Should create an array of values by running each element of `array` thru `iteratee`", () => {
        
        const testCases = [
			{ test: { arr: [1, 2, 3], func: (n)=> n*n }, result: [1, 4, 9] },
			{ test: { arr: [1, 2, 3], func: (n)=> n+n }, result: [2, 4, 6] },
			{ test: { arr: [1, 2, 3], func: (n)=> n+2 }, result: [3, 4, 5] },
		];

		testCases.map((testCase) => {
			expect(map(testCase.test.arr, testCase.test.func)).to.deep.equal(testCase.result);
		});
	});
});

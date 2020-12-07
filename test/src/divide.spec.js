import pkg from 'chai';
const {expect} = pkg;

import divide from "../../src/divide.js";

describe("divide.js unit test", () => {
	it("Should divide two numbers.", () => {

        const testCases = [
			{ test: {num1: 10, num2: 5}, result: 2 },
			{ test: {num1: 30, num2: 5}, result: 6 },
			{ test: {num1: 6, num2: 4}, result: 1.5 },
        ];
        
		testCases.map((testCase) => {
			expect(divide(testCase.test.num1, testCase.test.num2)).to.equal(testCase.result);
		});
	});
});

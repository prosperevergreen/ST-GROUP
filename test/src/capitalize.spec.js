import pkg from 'chai';
const {expect} = pkg;

import capitalize from "../../src/capitalize.js";

describe("capitalize.js test cases", () => {
	it("Should convert the first character of `string` to upper case and the remaining to lower case.", () => {

        const testCases = [
			{ test: "FooBar", result: "Foobar" },
			{ test: "foobar", result: "Foobar" },
			{ test: "FOOBAR", result: "Foobar" },
        ];
        
		testCases.map((testCase) => {
			expect(capitalize(testCase.test)).to.equal(testCase.result);
		});
	});
});

import pkg from "chai";
const { expect } = pkg;

import camelCase from "../../src/camelCase.js";

describe("camelCase.js test cases", () => {
	it("Should convert `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).", () => {
        
        const testCases = [
			{ test: "Foo Bar", result: "fooBar" },
			{ test: "--foo-bar--", result: "fooBar" },
			{ test: "__FOO_BAR__", result: "fooBar" },
		];
        
        testCases.map((testCase) => {
			expect(camelCase(testCase.test)).to.equal(testCase.result);
		});
	});
});

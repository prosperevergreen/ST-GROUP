import pkg from "chai";
import chai from "chai";
const { expect } = pkg;
const assert = chai.assert;

import toNumber from "../../src/toNumber.js";

describe("Unit Testing - Tonumber.js", () => {
	it("Testcase 1", function () {
		const answer = toNumber(3.2);
		expect(answer).to.deep.equal(3.2);
	});
	it("TestCase 2", function () {
		const answer = toNumber(Number.MIN_VALUE);
		expect(answer).to.deep.equal(5e-324);
	});
	it("TestCase 3", function () {
		const answer = toNumber(Infinity);
		expect(answer).to.deep.equal(Infinity);
	});
	it("TestCase 4", function () {
		const answer = toNumber("3.2");
		expect(answer).to.deep.equal(3.2);
    });
    it("TestCase 5: symbol", function () {
		const answer = toNumber(".");
		expect(answer).to.deep.equal(NAN);
    });
    it("TestCase 5: object", function () {
		const answer1 = toNumber(()=>10);
		const answer2 = toNumber({value:10 });
		expect(answer1).to.deep.equal(10);
		expect(answer2).to.deep.equal(10);
    });
        it("TestCase 5: Boolean", function () {
		const answer1 = toNumber(true);
		const answer2 = toNumber(false);
		expect(answer1).to.deep.equal(1);
		expect(answer2).to.deep.equal(0);
	});
});

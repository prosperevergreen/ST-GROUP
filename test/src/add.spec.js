import pkg from 'chai';
const {expect} = pkg;

import add from "../../src/add.js";


describe("add.js unit tests", () => {
	it("Should add two numbers", () => {
		for (let step = 0; step < 10; step++) {
			const num1 = Math.floor(Math.random() * 11000);
			const num2 = Math.floor(Math.random() * 11000);
			const result = num1 + num2;
			expect(add(num1, num2)).to.equal(result);
		}
	});
});

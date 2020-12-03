const expect = require("chai").expect;
const add = require("../../lib/add").default;

describe("add.js test", () => {
	it("Should equal added values", () => {
		for (let step = 0; step < 10; step++) {
			const num1 = Math.floor(Math.random() * 11000);
			const num2 = Math.floor(Math.random() * 11000);
			const result = num1 + num2;
			expect(add(num1, num2)).to.equal(result);
		}
	});
});

//test suite ://collection fo test
//tests
// const { sum } = require("./sum.js");
// console.log(sum);
const { sum } = require("../sum.js");
const { miliSec } = require("../miliToSec.js");
const { tax } = require("../tax.js");
const { password } = require("../password.js");
const { formatBytes } = require("../convert.js");

test("addition of two positiove number", () => {
	expect(sum(1, 2)).toBe(3);
	expect(sum(2, 2)).toBe(4);
});

test("milli secound to sec or min", () => {
	expect(miliSec(3000)).toBe("3 sec");
	expect(miliSec(180000)).toBe("3 min");
});

test("tax and savings", () => {
	expect(tax(2000000)).toBe("tex:-600000 saving:-200000");
	expect(tax(500000)).toBe("tex:-100000 saving:-150000");
	expect(tax(800000)).toBe("tex:-160000 saving:-240000");
});

test("password validation check", () => {
	expect(password("Mukul12@")).toBe("login scuessfull");
	expect(password("12345")).toBe("your password is too short");
	expect(password("muklhdgvh")).toBe("please check your password is weak");
	expect(password("muklhdgvh@")).toBe("please check your password is weak");
});

test("convert data formatBytes", () => {
	expect(formatBytes(1024)).toBe("1 KB");
	expect(formatBytes("1024")).toBe("1 KB");
	expect(formatBytes(1234)).toBe("1.205 KB");
	expect(formatBytes(6544528)).toBe("6.241 MB");
});

// file extentions : js, ts,jsx,tsx
//      __tests__/any/test.js or ts or jsx ot tsx
//end with : - .space.ts otr js or tsx or jsx or .test.js  or ts or tsx

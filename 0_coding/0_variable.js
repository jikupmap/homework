// https://www.geeksforgeeks.org/undefined-vs-null-in-javascript/

const age = 10; // number
const job = "개발자"; // string
const isPerson = true; // boolean

const object = {}
const notExist = undefined;
const empty = null;


// Number
const parsedInt = Number.parseInt('321', 2);
const parsedFloat =  Number.parseFloat('12.34');
const fixed = Number.parseFloat('123.456').toFixed(2);
const isInteger = Number.isInteger(19 / 5);
const isNaNType = Number.isNaN('text');

// String
const charAt = "테스트".charAt(1);
const includes = "테스트".includes("스트");
const upperCase = "test".toUpperCase();
const trim = "테스트 완료".trim();
const slice = "테스트".slice(1, 2);
const split = "테스트_완료".split("_");
const replace = "테스트 완료했지만, 그리워하다".replace(/그리워하다/i, "");
const isMatch = "테스트 해봤어? hey what!".match(/[가-힣]/i);
const matchedAll = "테스트 해봤어? hey what!".matchAll(/[가-힣]/i);


//https://github.com/Microsoft/TypeScript/issues/2031
const one = 1
const two = 2
const three = one + two
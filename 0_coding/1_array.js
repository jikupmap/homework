// https://coderwall.com/p/h4xm0w/why-never-use-new-array-in-javascript

const nums = [10, 20, 30, 40]; // number[]
const jobs = ["개발자", "기획자", "디자이너"]; // string[]


//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array

const nums1 = [10, 20, 30]; // number[]
const nums2 = [40, 50, 60]; // number[]

const nums3 = nums1.concat(nums2); // number[]
const nums4 = [...nums1, ...nums2]; // number[]

const iterator = nums1.entries();
iterator.next();
const num20 = iterator.next().value();

const over20FirstNum = nums1.find((num) => num > 20);
const over10FirstIndex = nums1.findIndex((num) => num > 10);
const isInclude = nums2.includes(50); // boolean

const isOver40 = nums2.every((num, idx, arr) => num >= 40); // boolean
const over10Nums = nums1.filter((num) => num > 10); // number[]
const isOver30LeastOne = nums1.some((num) => num > 30); // boolean

let sum = 0
nums3.forEach((num) => { sum += num });

const nums5 = nums2.map((num) => num + 10);

const phoneNum = ["010", "2222", "3333"].join("-"); // string

const sum50 = nums1.reduce((prev, curr) => prev + curr, 50);
const nums6 = [[0, 1], [2, 3], [4, 5]].reduceRight((accumulator, curr) => [...accumulator, ...curr]);

const num5 = nums6.pop(); // [0, 1, 2, 3, 4]
nums6.push(5); // [0, 1, 2, 3, 4, 5]
const num0 = nums6.shift() // [1, 2, 3, 4, 5]
nums6.unshift(0); // [0, 1, 2, 3, 4, 5]

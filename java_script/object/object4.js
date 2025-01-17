// 1일의 요일?, 막날?

let month = 2;
let date = 0;
let year = 2024;

let today = new Date();
today.setFullYear(year);
today.setMonth(month);
today.setDate(date);

today = new Date(2024, 4, 3, 15, 30, 22);

// console.log(today, today.getDate());
console.clear();

let a = 'hello';
let b = 'hello';
console.log(a == b);


today = new Date();
let now = new Date();
console.log(today.getTime() == now.getTime());
console.log(today == now);

console.log(new Date(2000));
console.log(today.valueOf() == now.valueOf());
console.log(today.valueOf());


today = new Date();
//2022년 5월 17일

console.log(today);
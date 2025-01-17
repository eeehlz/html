// object2.js

//concat(배열요소 합)
let numAry1 = [10, 20];
let numAry2 = [30, 40];
let resultAry = numAry1.concat(numAry2);
console.log(resultAry.join('-').split('-'));
//join => 배열 -> 문자열
//split => 문자열 -> 배열

let result = resultAry.join('-').split('-');
result.push('60'); //unshift
console.log(`shift : ${result.pop()}`); //shift

console.log(result, result.indexOf('40'));

// console.clear();

result = ["홍길동", "김민수", "허성식", "박창식"];

if (result.indexOf("허성식") != -1) {
  console.log("찾는 이름이 존재한다.");
} else {
  console.log("찾는 이름이 없다.");
}

console.log(result.at(1)); // .at 인덱스에 해당하는 값을 반환

result.sort(); // sort 배열 정렬할때
console.log(result);

result.reverse(); // sort 배열 정렬할때 (역순)
console.log(result);

result.sort().reverse().join();
console.log(result);


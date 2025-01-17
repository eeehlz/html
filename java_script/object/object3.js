//object3.js

//forEach()

let numAry = [20, 13, 45, 62, 19];
let sum = 0;
let max = 0;
numAry.forEach(function (item, idx, ary) { //(배열의 요소, 인덱스값, 배열 자체)
  if (idx % 2 == 0) {
    sum += item;
  }
  //큰값
  if (max < item) {
    max = item;
  }
});
console.log(`짝수의 합계: ${sum}, 최고값은: ${max}`);

//filter(function(item, idx, ary) {} 조건을 만족하는 새로운 배열을 생성)
let filterAry = numAry.filter(function (item, idx, ary) {
  if (item % 2 != 0) {
    return true;
  } else {
    return false;
  }
});
console.log(filterAry);

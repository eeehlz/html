// forloop.js
let sum = 0;

//1 ~ 10 까지 출력.

for(let i = 1; i <= 10; i++) {
  console.log(`현재 i의 값 : ${i}`);
  if(i % 2 != 0){
  sum = sum + i;
  }
}
console.log(`1~10까지의 홀수의 합: ${sum}`)
console.log('end of for')

// for(let i = 10; i >= 1; i--) {
//   console.log(`현재 i의 값 : ${i}`);
// }
// console.log('end of for')
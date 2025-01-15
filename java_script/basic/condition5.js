//두 수: 1~100 까지의 임의의 값을 생성
//큰수에서 작은 수 빼서 결과값을 출력

let Num01 = parseInt(Math.random() * 100) +1
let Num02 = parseInt(Math.random() * 100) +1
let Num03 = parseInt(Math.random() * 100) +1
console.log(` 첫번째 수: ${Num01}`);
console.log(` 두번째 수: ${Num02}`);

if(Num01 > Num02) {
 let result1 = Num01 - Num02 
 console.log(`${Num01} - ${Num02} = ${result1}`);
} else {
  let result2 = Num02 - Num01
  console.log(`${Num02} - ${Num01} = ${result2}`);
} 

console.log(` Num01: ${Num01} Num02: ${Num02} Num03:${Num03}`);
if(Num01 > Num02) {
  if(Num01 > Num03) {
  result3 = Num01;
} else {
  result3 = Num03
}
}
else {
  if(Num02 > Num03) {
    result3 = Num02;
  } else {
    result3 = Num03
  }
}
console.log(`가장 큰수: ${result3}`);


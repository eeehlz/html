// let Num01 = prompt("숫자를 입력하세요 1");
// let Num02 = prompt("숫자를 입력하세요 2");

// result = Number(Num01) * Number(Num02);

// console.log(`${Num01} X ${Num02}  = ${result} 입니다.`)

// let Num01 = parseInt(prompt("숫자를 입력하세요 1 :"));
// let Num02 = parseInt(prompt("숫자를 입력하세요 2 :"));
// Num01 %= 3;       //parseInt(Num01) + 1
// Num02 -= 3;       //parseInt(Num02) -1
// console.log(Num01, Num02)
// result = ++Num01 % --Num02;
// console.log(Num01, Num02)
// console.log(`${Num01} 나누기 ${Num02}  = ${result} 입니다.`)

// * (곱하기) 연산자는 변환 안해도 가능


let Num01 = Number(prompt("첫번째 숫자 :"));
let Num02 = Number(prompt("두번째 숫자 :"));
console.log(`첫번째 입력 숫자 ${Num01}`);
console.log(`두번째 입력 숫자 ${Num02}`);

 
result = Num01 * Num02;

console.log(`${Num01} X ${Num02} = ${result}`);
Num01 += 5;
Num02 -= 3;

result02 = Num01 - Num02;

console.log(`${Num01} - ${Num02} = ${result02}`);

//condition3.js
//2개의 숫자를 입력
//2개 짝수 => "모두 짝수"
//1개 짝수 => "하나는 짝수"
//0개 => "짝수는 없습니다."

let anyNum1 = prompt("첫번째 숫자를 입력하세요.")
let anyNum2 = prompt("두번째 숫자를 입력하세요.")
console.log(anyNum1, anyNum2);

if(anyNum1 % 2 == 0 && anyNum2 % 2 == 0) {
  alert(`${anyNum1} 과 ${anyNum2} 는 짝수이다.`)
} else if(anyNum1 % 2 == 0 || anyNum2 % 2 == 0) {
  result = (anyNum1 % 2 == 0 || anyNum2 % 2 == 0)
  alert(`${anyNum1} 과 ${anyNum2} 에서 ${result}만 짝수이다.`)
} else {
  console.log("짝수 없다.")
  alert("짝수없다!");
  
}
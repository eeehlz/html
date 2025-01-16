// function2.js
/*
 함수이름: getMax
 매개변수: numAry(배열)
 기능: 배열의 요소중에서 제일 큰값을 콘솔에 출력
 */
let ary1 = [3, 15, 22, 7];
let ary2 = [23, 11, 45, 30];
let ary3 = [];

for (let i = 0; i < 5; i++) {
  ary3[i] = parseInt(Math.random() * 50);
}
// console.log(ary3)

function getMax(numAry = []) {
  let max = 0; // 제일 큰값을 담아놓을 변수선언

  //배열 비교하도록 반복문
  for (let i = 0; i < numAry.length; i++) {
    // max = numAry[i]

    //제일 큰값 max 에 저장
    if (max < numAry[i]) {
      max = numAry[i];
    }

  }
  return max; // 함수를 호출한 영역으로 반환
  // console.log(`가장 큰값은 ${max}`)
}


console.log(`가장 큰값은 : ${getMax(ary1)}`);
console.log(`가장 큰값은 : ${getMax(ary2)}`);
console.log(`가장 큰값은 : ${getMax(ary3)}`);
alert(getMax(ary3));
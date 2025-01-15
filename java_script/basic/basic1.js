let myInfoD = {
  name: "이혁진",
  phNum: "010-1234-1234",
  addr: "대구"
}

let test = "123";

const bloodType = "0";
// bloodType = "A";
const PI = 3.14; // 프로그램 변하지 않는 값으로 선언
let largeNum = 10000000000000000000000000000n; //큰값은 뒤에 n 을 붙여라




console.log("내이름은 " + myInfoD.name + " 연락처는 " + myInfoD.phNum + " 주소는 " + myInfoD.addr)

console.log(`테스트 ${test} 테스트`);

console.log(PI)

console.log(largeNum);

console.log(typeof myInfoD.name); // 변수의 자료형을 출력

console.log(typeof PI)

let myInfo = {
  name: "홍길동",
  phNum: "010-1234-1234",
  age: 20
};

let scores = [10, 20, 30]; // 배열
let spacialType = null;

console.log(typeof myInfo) // object

console.log(typeof scores) // object

console.log("spacialTpye = " + typeof spacialType) // undefined
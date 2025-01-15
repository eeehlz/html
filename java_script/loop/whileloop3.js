//object 타입
let myInfo = {
  name: "kim-jungEun", // 속성: 값
  age: 20, // 속성: 값
  height: 170, // 속성: 값
  weight: 65 // 속성: 값
};
//object
console.log(myInfo);
console.log(`name: ${myInfo.name} age: ${myInfo.age} height: ${myInfo.height} weight: ${myInfo.weight}`);

//for ..in 반복문
for (let prop in myInfo) {
  console.log(`속성: ${prop}, 값: ${myInfo[prop]}`);
}

//fo..of 반복문
let nameAry = ['홍길동', '복성민', '김민석', '박석길'];
for (let name of nameAry) {
  console.log(`값 : ${name}`);
}

let myFriend1 = {
  name: "홍길동",
  phone: "010-1111-2222",
  address: "대구 중구 100번지"
}

let myFriend2 = {
  name: "한동은",
  phone: "010-2222-3333",
  address: "대구 서구 200번지"
}

let myFriend3 = {
  name: "양송일",
  phone: "010-3333-4444",
  address: "대구 동구 300번지"
}

let friends = [myFriend1, myFriend2, myFriend3];
console.log(friends[0].name);
console.log(friends[1]['phone']);
console.log(friends[2]['address']);

for(let i=-0; i<friends.length; i++) {
  // 친구이름.
  console.log(`이름: ${friends[i].name}`);
}
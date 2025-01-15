let members = []

members[0] = {
  member_id: "user01",
  member_name: "홍길동",
  point: 79
};
members[1] = {
  member_id: "user02",
  member_name: "한길동",
  point: 99
};
members[2] = {
  member_id: "user03",
  member_name: "박길동",
  point: 20
};


while (true) {
  let searchName = prompt("찾을 친구 이름 입력: ");
  if (searchName == '그만') {
    break;
  }

  let exists = false; //상태 추적용 변수
  for (let i = 0; i < members.length; i++) {
    //배열의 이름속성중에서 searchName과 같으면 포인트를 콘솔에 출력
    if (searchName == members[i].member_name) {
      console.log(`${searchName} 포인트는 ${members[i].point}`)
      exists = true; // true 인 상태에서 if 문을 들어가면 true -> false 로서 if문 진행X
      break; // 어차피 break 라서 if문 진행안함. but if에 exists 넣어봤자 alert 실행 안됨.
    }
  }
  if (!exists) {
    alert("그런이름없다.")
  }
}
console.log('end of program');



// (searchName != members[i]['member_name'])

//break는 if 조건이 true일 때만 실행되고, 그렇지 않으면 else가 계속 실행됩니다.
// true 실행 false 미실행

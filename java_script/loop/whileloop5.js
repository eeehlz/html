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
  if (searchName == 'stop') {
    break;
  }

  let exists = false;
  for (let i = 0; i < members.length; i++) {
    //배열의 이름속성중에서 searchName과 같으면 포인트를 콘솔에 출력
    if (searchName == members[i].member_name) {
      console.log(`${searchName} 포인트는 ${members[i].point}`)
      exists = true;
      break;
    }
  }
  if (!exists) {
    alert("그런이름없다.")
  }
}
console.log('end of program');



// (searchName != members[i]['member_name'])
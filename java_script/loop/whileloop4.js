//member_id = user01 member_name: 홍길동 point: 80
//member_id = user02 member_name: 신현준 point: 90
//member_id = user03 member_name: 김민식 point: 85

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

let max = members[0];
// let maxId ='';
for(let i = 0; i < members.length; i++) {
  if (max.point < members[i]['point']){
    max = members[i];
    // maxId = members[i]['member_id'];
  }
}
console.log(`최고 포인트 :${max.point} Id :${max['member_id']}`);
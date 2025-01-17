let myFriends = [];
myFriends.push({name:"홍길동", escore: 70, kscore: 78, gender: 'Female'});
myFriends.push({name:"신현욱", escore: 80, kscore: 88, gender: 'Female'});
myFriends.push({name:"김민식", escore: 90, kscore: 70, gender: 'Male'});
myFriends.push({name:"석지욱", escore: 95, kscore: 55, gender: 'Female'});

// forEach 로 출력
myFriends.forEach(function (item, idx, ary){
let avg = (item.escore + item.kscore)/2;
if(avg >= 80) {
  console.log(`평균80이상 :${item.name}`);
}

sum = 0; cnt = 0;
if(item.gender == 'Female') {
  sum += item.escore;
  cnt++;
}
})
avg = sum/cnt;
console.log(`여자 점수 평균: ${avg}`);



let woman = myFriends.filter(function(item, idx, ary) {
    if(item.gender == "Female") {
      console.log(`Female : ${item.name}`)
    };
})
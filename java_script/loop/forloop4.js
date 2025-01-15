//0 <= Math.random()*100 < 100 => 50부터 100사이
//학생 10명의 임의 점수를 배열에 저장.
let scores = [];
let sum = 0;
let max = 0;

for(i=0; i<10; i++) {
  scores[i] = parseInt(Math.random() * 51) + 50;
  console.log(scores[i]);
}

// if(scores[i] < 51) {
//   scores[i] = scores[i] + 50;
// }

//평균계산
for (let i =0; i < 10; i++) {
  sum += scores[i];
  //최댓값계산
  if(max < scores[i]) {
    max = scores[i]
  }
}
console.log(`평균은 ${sum / 10} 최고점수는 ${max}`);




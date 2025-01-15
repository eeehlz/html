//whileloop

//1 ~10 출력
// let i = 1;
// while (i <= 10) {
//   console.log(i)
//   i++;
// }
let run = true;
while (run) {
  let temp = parseInt(Math.random() * 100);
  console.log(temp);
  if(temp < 40) {
    // break; //반복문 종료할떄
  run = false;
  }
}
console.log('end of program');
//stop 입력하면 반복문 멈춤
//그동안 입력한 중에서 제일 큰 값을 출력

// let run = true;
let max = 0;
while (true) {
  let inputValue = prompt("점수를 입력하세요: ");
  console.log(inputValue);
  let temp = parseInt(inputValue);       //isNaN(temp)
  if (isNaN(temp)) { //입력한 값이 문자열 이라면>?
    if (inputValue == "stop") {
      // run = false;
      break;
    }
  } else {
    if (max < parseInt(inputValue)) {
      max = parseInt(inputValue); //parseInt 없으면 고장난다.
    }
  }
}
console.log(`최고점수 ${max}`);
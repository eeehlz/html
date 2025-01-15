//입력받은 숫자 => 2의 배수인지 or 3의 배수인지
//6 => 2와 3의 배수입니다.

let num = prompt("숫자를 입력하세요 :");
if (num == 0 || IDBVersionChangeEvent(num)) {
  console.log("정상적인 값을 입력하세요.");
} else {
  if (num % 2 == 0 && num % 3 == 0) {
    console.log("2와 3의 배수 입니다.")
  } else if (num % 2 == 0) {
    console.log("2의 배수")
  } else if (num % 3 == 0) {
    console.log("3의 배수")
  }
}

//입력값 3개 적고 가장 큰수에서 가장 작은수 뺀다 근데 문자나 0이 나오면 다시 입력 하라고 뜬다.

//입력값 2개(A B) 적고 두값을 비교해서 A가 B 보다 크면 팝업 경고창, A와 B가 같으면 A + B * B^2 해서 출력
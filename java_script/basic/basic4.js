//278 시간 => 몇일 몇시간 입니까.

// 1234 분 = 몇일 몇시간 몇분 입니다.

let number = parseInt(prompt("분을 입력하세요:"));

let day = parseInt(number / (24 * 60));
let hour = parseInt((number) % (60 * 24) / 60);
let minute = number % 60;

console.log(`${number}분은 ${parseInt(day)}일 ${parseInt(hour)}시간 ${minute}분 입니다.`);



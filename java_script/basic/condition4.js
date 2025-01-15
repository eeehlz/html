
const obj = {
  name: "홍길동",
  age: 20,
  showName: function(){         // 메소드
    console.log(obj.name);
  }
}
obj.showName();
let num1 = parseInt(Math.random() * 10) + 1;
let num2 = parseInt(Math.random() * 10) + 1;

let OddResult
let EvenResult
let sumEven = 10; // 짝수의 값은 sumEven에 합하기
let sumOdd = 20; // 홀수의 값은 sumOdd에 합하기
//1-10사이의 임의수 출력
// console.log(parseInt(Math.random() * 10) +1); // 0 <= x < 1 값의 출력

// if(num1 % 2 == 0){
  //  EvenResult = sumEven + num1
  //  console.log(`제공된 숫자: ${num1} 짝수 ${num1} + ${sumEven} = ${EvenResult}`);
  // } else if(num1 % 2 != 0) {
    //   OddResult = num2 + sumOdd
    //   console.log(`제공된 숫자: ${num1} 홀수 ${num2} + ${sumOdd} = ${OddResult}`); 
    // }
    
    // if(num2 % 2 == 0){
      //   EvenResult = sumEven + num1
      //   console.log(`제공된 숫자: ${num2} 짝수 ${num1} + ${sumEven} = ${EvenResult}`);
      //  } else if(num2 % 2 != 0) {
        //    OddResult = num2 + sumOdd
        //    console.log(`제공된 숫자: ${num2} 홀수 ${num2} + ${sumOdd} = ${OddResult}`); 
        //  }

        if(num1 % 2 == 0 ) {
          sumEven = num1;
          console.log(sumEven)
        } else {
          sumOdd += num1;
          console.log(sumOdd)
        }
        console.log()

        if(num1 % 2 == 0 ) {
          sumEven = num2;
          console.log(sumEven)
        } else {
          sumOdd += num2;
          console.log(sumOdd)
        }
        
        
        
        

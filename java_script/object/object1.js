// object1.js

let obj = {}; // 객체(인스턴스)
obj = new Object(); // 생성자

obj.title = "이것이자바다";
obj['price'] = 30000;

console.log(obj);

let today = new Date();
console.log(today.getFullYear() + '년도');
document.write(today.getFullYear() + '년도');

let numAry = [10, 20, 30]; // new Array();
numAry.push(40); // 맨뒤에 추가
numAry.unshift(5); // 맨 앞에 추가
numAry.splice(1, 1, 4); // splice(1 , 1 , 2);  



console.log(numAry);

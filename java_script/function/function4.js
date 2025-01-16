// function4.js

// 이벤트 - 이벤트핸들러.
let item = document.querySelector('button'); //화면상에 있는 기능 불러오기?
console.log(item);

item.addEventListener('click', function () { //함수에 이름이 없다면 '잉여함수' 라 한다.
  alert("마우스가 클릭됨")
});

item.addEventListener('mouseover', function () {
  item.style.backgroundColor = 'yellow';
});

document.querySelector('button').addEventListener('mouseout', function () {
  item.style.backgroundColor = ''
})

// item.addEventListener('mouseout', function(){
//   item.style.backgroundColor = '';
// });
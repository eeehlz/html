let numAry = [{
    name: '조카',
    age: 10
  },
  {
    name: '큰조카',
    age: 14
  },
  {
    name: '삼촌',
    age: 31
  },
  {
    name: '큰아버지',
    age: 45
  },
  {
    name: '나',
    age: 21
  }
];

let filAry = numAry.filter(function (item, idx, ary) {
  if (item.name.indexOf('조카') != -1) {
    return true;
  }
  return false;
});
console.log(filAry);




//0번째 값은 10
//1번쨰 값은 14
// numAry.forEach(function (item, idx, ary) {
//   // console.log(`${idx}번째 값은 ${item}`);
//   // if (item > 10) {
//   //   console.log(`10보다 큰 값은${item}`);
//   //}
//     if (item.age > 10) {
//       console.log(`10살 이상인 사람은 ${item.name}`);

//     }

// });
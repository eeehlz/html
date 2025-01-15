//짝수 값을 구하는 반복문

// let sum = 0;

// for(i= 0; i <=10; i++) {
//   if(i % 2 != 1) {
//     sum = sum + i
//   }
//   console.log(sum);
// }

let html = '';

html += '<table border="1">';
html += '<tbody>';
for (i = 1; i <= 10; i++) {
  // console.log(++i)
  if (i % 2 == 1) {
    html += `<tr style= 'background-color: yellow'><td>${i}</td></tr>`
  } else {
    html += `<tr style= 'background-color: blue'><td>${i}</td></tr>`
  }
}

for (j = 1; j <= 9; j++) {

  html += `<tr><td style='background-color: yellow'>2 * ${j} = ${2 * j}</td></tr>`;
}
html += '</tbody>'
html += '</table>'

document.write(html);
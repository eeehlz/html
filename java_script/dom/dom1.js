// dom1.js

document.addEventListener('DOMContentLoaded', init);

function init() {
  console.dir(document);

  document.forms.myForm.addEventListener('submit', function (e) {
    e.preventDefault(); // 기본 기능 차단.
    // 사용자의 입력값을 변수에 저장.
    let mid = document.querySelector('input[name="member_id"]').value;
    let mname = document.querySelector('input[name="member_name"]').value;
    let mpoint = document.querySelector('input[name="point"]').value;

    if (mid == null || mid.length < 5 || mid.length > 20) {
      alert("id를 5자 이상 20자 이하로 생성해주세요.");
      return; // 함수종료.
    }

    let member = {
      memberId: mid,
      memberName: mname,
      point: mpoint
    };
    let tr = makeTr(member); // 값.
    // let member = [mid, mname, mpoint];
    // let tr = makeTrAry(member);

    // tbody의 하위요소로 추가.
    document.querySelector('#list').appendChild(tr);
  }) // end of submit.

  document.querySelector('thead input').addEventListener('change', function () {
    document.querySelectorAll('tbody input').forEach(function (item, idx, ary) {
      item.checked = document.querySelector('thead input[type= checkbox]').checked;
    });
  });

} // end of init().ss

function makeTrAry(mbr = []) {
  let tr = document.createElement('tr'); // td*3를 자식요소로 가질 부모.
  mbr.forEach(function (item) {
    let td = document.createElement('td'); // 회원ID, 회원이름, 점수
    td.innerText = item; // 아이디, 이름, 점수 
    tr.appendChild(td);
  });
  return tr; // return; 
} // end of makeTrAry.

function makeTr(mbr = {}) {
  // <tr> 필요한함수: createElement, appendChild
  //   <td>admin</td>
  //   <td>김관리</td>
  //   <td>120</td>
  // </tr>
  let tr = document.createElement('tr'); // td*3를 자식요소로 가질 부모.

  //<td><input type="checkbox"></td>
  let td1 = document.createElement('td');
  let chk = document.createElement('input');
  chk.type = "checkbox";
  td1.appendChild(chk);
  tr.appendChild(td1);


  for (let prop in mbr) {
    let td = document.createElement('td'); // 회원ID, 회원이름, 점수
    td.innerText = mbr[prop];
    tr.appendChild(td);
  }

  // <td><button>삭제</button></td>
  let td = document.createElement('td');
  let btn = document.createElement('button');
  btn.style.backgroundColor = 'yellow';
  btn.innerText = '삭제';

  btn.addEventListener('click', function () {
    btn.parentElement.parentElement.remove();
    // tr.remove();
  });

  td.appendChild(btn);
  tr.appendChild(td);


  return tr; // return; 
} // end of makeTr(). dasdasassadsa
//event.js

let item = document.querySelector('button[name="add"]');

item.addEventListener('click', function(){
  let n1 = document.querySelector('input[name="first"]').value;//AsNumber;
  let n2 = document.querySelector('input[name="second"]').value;//AsNumber;
  console.dir(n1+n2);
  document.querySelector('input[name="result"]').value = parseInt(n1) + parseInt(n2);
  // document.querySelector('#result')['value'] = n1 + n2; 이것도 가능
});

let item2 = document.querySelector('button[name="minus"]');
item2.addEventListener('click',function(){
  let n1 = document.querySelector('input[name="first"]').value;//AsNumber;
  let n2 = document.querySelector('input[name="second"]').value;//AsNumber;
  console.dir(n1-n2);
  document.querySelector('input[name="result"]').value = parseInt(n1) - parseInt(n2);

});

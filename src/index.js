import _ from 'lodash';

let arr = [];

function addRandomNum() {
  //const mainEl = document.getElementById('main');
  const randomNum = _.random(0, 10);
  let p = document.createElement('p')
  p.innerHTML = "Random Number: " + randomNum.toString();
  document.body.appendChild(p)
  arr.push(randomNum);
}

{
  const button1 = document.getElementById('button1')
  button1.addEventListener("click", addRandomNum);
  console.log("ready");
}

function recordNumber() {
  let p = document.createElement('p')
  const sum =_.sum(arr);
  p.innerHTML = "sum: " + sum.toString();
  document.body.appendChild(p)
  console.log(arr);
}

{
  const button2 = document.getElementById('button2')
  button2.addEventListener("click", recordNumber);
}

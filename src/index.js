import _ from 'lodash';

function addRandomNum() {
  //const mainEl = document.getElementById('main');
  let p = document.createElement('p')
  p.innerHTML = "Random Number: " + _.random(0, 10).toString();
  document.body.appendChild(p)
}

{
  const button1 = document.getElementById('button1')
  button1.addEventListener("click", addRandomNum);
  console.log("ready");
}

function recordNumber() {
  let p = document.createElement('p')
  p.innerHTML = "sum: " + _.sum([]).toString();
  document.body.appendChild(p)
}

{
  const button2 = document.getElementById('button2')
  button2.addEventListener("click", recordNumber);
}

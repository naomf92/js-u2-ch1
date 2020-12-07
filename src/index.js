import _ from 'lodash';

function addRandomNum() {
  //const mainEl = document.getElementById('main');
  let p = document.createElement('p')
  p.innerHTML = "Random Number: " + _.random(0, 10).toString();
  document.body.appendChild(p)

  arr.push(addRandomNum());
}

{
  const button1 = document.getElementById('button1')
  button1.addEventListener("click", addRandomNum);
  console.log("ready");
}

function recordNumber() {
  let arr = [];
  // ↓ この実装は合計の計算の機能ではないので、関数addRandomNumで行うのが良さそうです
  //arr.push(addRandomNum());

  let p = document.createElement('p')

  // _.sum()の記述は、以下に1行にまとめると読みづらいので、可読性を上げるため、定数に入れると良さそうです
  //p.innerHTML = "sum: " + _.sum(arr).toString();

  const html =_.sum(arr).toString();
  p.innerHTML = "sum: " + html;
  document.body.appendChild(p)
}

{
  const button2 = document.getElementById('button2')
  button2.addEventListener("click", recordNumber);
}

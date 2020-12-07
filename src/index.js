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
  // ↓ 変数arrのスコープ場所を考えると良さそうです
  let arr = [];

  let p = document.createElement('p')

  // 今回の場合はどちらでも問題ないですが、_.sum()の記述だけ定数に入れておくと、再利用性が高いかもしれません
  // const sum = _.sum(arr);
  // p.innerHTML = 'Sum: ' + sum.toString();

  const html =_.sum(arr).toString();
  p.innerHTML = "sum: " + html;
  document.body.appendChild(p)
}

{
  const button2 = document.getElementById('button2')
  button2.addEventListener("click", recordNumber);
}

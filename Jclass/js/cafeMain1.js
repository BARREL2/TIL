import {Menu} from '../js/cafeModule1.js';

let $lis = document.getElementsByTagName('td');
let tdCounter = 0;
const setTable=()=>{
    $lis[tdCounter].textContent = cafe1.orderName;
    tdCounter++;
    $lis[tdCounter].textContent = cafe1.price;
    tdCounter++;
};

const cafe1 = new Menu('アイスコーヒー',1500);
console.log(cafe1.getMyOrder());
setTable();

cafe1.orderName = 'いちごケーキ';
cafe1.price = '2800';
console.log(cafe1.getMyOrder());
setTable();

cafe1.setMyOrder('Pizza',1800);
console.log(cafe1.getMyOrder());
setTable();

const cafe2 = new Menu();
cafe2.setMyOrder('レモンジュース',450);
console.log(cafe2.getMyOrder());

//静的メソッドの実行　書式→クラス名.
console.log('支払い金額',Menu.calcTax(cafe2.price));

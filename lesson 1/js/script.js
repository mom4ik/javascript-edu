var cost = prompt("Ваш бюджет?");
var name = prompt("Название вашего магазина?");
var shopGoods = [];
var employee = {};

for(var i = 0; i < 5; i++) {
    shopGoods[i] = prompt("Какой тип товаров будем продавать?");
}

//console.log(shopGoods);

var mainList = {};
mainList = {
    c: cost,
    n: name,
    s: shopGoods,
    e: employee,
    open: false
}

alert(mainList.c + mainList.n + mainList.s + mainList.e);

var cost = prompt("Ваш бюджет?");
var name = prompt("Название вашего магазина?");
var shopGoods = [];
var employee = {};
shopGoods[0] = prompt("Какой тип товаров будем продавать?");
shopGoods[1] = prompt("Какой тип товаров будем продавать?");
shopGoods[2] = prompt("Какой тип товаров будем продавать?");

var mainList = {};
mainList = {
    c: cost,
    n: name,
    s: shopGoods,
    e: employee
}

alert(mainList.c + mainList.n + mainList.s + mainList.e);

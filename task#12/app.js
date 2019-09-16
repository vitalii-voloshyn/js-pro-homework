// Сеть фастфудов предлагает несколько видов гамбургеров:

// маленький (50 тугриков, 20 калорий)
// большой (100 тугриков, 40 калорий)

// Гамбургер может быть с одним из нескольких видов начинок:

// сыром (+ 10 тугриков, + 20 калорий)
// салатом (+ 20 тугриков, + 5 калорий)
// картофелем (+ 15 тугриков, + 10 калорий)

// Можно добавить добавки:

// посыпать приправой (+ 15 тугриков, 0 калорий)
// полить майонезом (+ 20 тугриков, + 5 калорий).

// Напишите программу, расчитывающую стоимость и калорийность гамбургера. Используй ООП подход (подсказка: нужен класс Гамбургер, константы, методы для выбора опций и рассчета нужных величин).

// Пример работы кода:

// маленький гамбургер с начинкой из сыра
//const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка из майонеза
//hamburger.addTopping(Hamburger.TOPPING_MAYO);

// спросим сколько там калорий
//console.log(“Calories: “ + hamburger.calculateCalories());

// сколько стоит
//console.log("Price: “ + hamburger.calculatePrice());

// я тут передумал и решил добавить еще приправу
//hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А сколько теперь стоит?
//console.log("Price with sauce: “ + hamburger.calculatePrice());

'use strict';

function Hamburger(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this._toppings = [];
}


Hamburger.SIZE_SMALL = 'SIZE_SMALL';
Hamburger.SIZE_LARGE = 'SIZE_LARGE';

Hamburger.SIZES = {
    [Hamburger.SIZE_SMALL]: { price: 50, calories: 20 },
    [Hamburger.SIZE_LARGE]: { price: 110, calories: 40 }
};



Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
Hamburger.STUFFING_SALAD = "STUFFING_SALAD";
Hamburger.STUFFING_POTATO = "STUFFING_POTATO";

Hamburger.STUFFINGS = {
    [Hamburger.STUFFING_CHEESE]: { price: 10, calories: 20 },
    [Hamburger.STUFFING_SALAD]: { price: 20, calories: 5 },
    [Hamburger.STUFFING_POTATO]: { price: 15, calories: 10 }
};



Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
Hamburger.TOPPING_MAYO = "TOPPING_MAYO";

Hamburger.TOPPINGS = {
    [Hamburger.TOPPING_SPICE]: { price: 15, calories: 0, },
    [Hamburger.TOPPING_MAYO]: { price: 20, calories: 5, },
};



Hamburger.prototype.getTopping = function () {
    return this._toppings;
}


Hamburger.prototype.addTopping = function (topping) {
    if (!this._toppings.includes(topping)) {
        return this._toppings.push(topping);
    } else {
        console.log('TOPPING is already added!');
    }
}


Hamburger.prototype.calculateCalories = function () {
    let caloriesArr = this._toppings.map(el => Hamburger.TOPPINGS[el].calories);
    caloriesArr.push(Hamburger.SIZES[this.size].calories,
        Hamburger.STUFFINGS[this.stuffing].calories);
    caloriesArr = caloriesArr.reduce((accum, current) => accum + current, 0);
    return caloriesArr;
}


Hamburger.prototype.calculatePrice = function () {
    let priceArr = this._toppings.map(el => Hamburger.TOPPINGS[el].price);
    priceArr.push(Hamburger.SIZES[this.size].price,
        Hamburger.STUFFINGS[this.stuffing].price);
    priceArr = priceArr.reduce((accum, current) => accum + current, 0);
    return priceArr;
}





const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
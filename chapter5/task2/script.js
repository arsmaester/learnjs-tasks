// Сумма пользовательских чисел

let a = +prompt("Введите первое число", "");
let b = +prompt("Введите второе число", "");

alert(a + b);

// Ввод числового значения

function readNumber() {
    let num;

    do {
        num = prompt("Введите число", 0);
    } while (!isFinite(num));

    if (num === null || num === '') return null;

    return +num;
}

// Бесконечный цикл по ошибке

let i = 0;
while (i != 10) {
    i += 0.2; // никогда не завершится из-за потери точности в подсчёте i
}

// Случайное число от min до max

function random(min, max) {
    return min + Math.random() * (max - min);
}

// Случайное целое число от min до max

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
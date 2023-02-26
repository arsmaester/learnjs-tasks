// Привет, object

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// Проверка на пустоту

function isEmpty(obj) {
    return Object.keys(obj).length === 0
}

let schedule = {};

console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

console.log(isEmpty(schedule)); // false

// Сумма свойств объекта


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}

// Умножаем все числовые свойства на 2

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}
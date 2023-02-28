// Сумма свойств объекта

function sumSalaries(salaries) {

    let sum = 0;
    for (let salary of Object.values(salaries)) {
        sum += salary;
    }

    return sum; // 650
}

// Подсчёт количества свойств объекта

function count(obj) {
    return Object.keys(obj).length;
}
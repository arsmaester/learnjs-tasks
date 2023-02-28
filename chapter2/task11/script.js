// Обязателен ли "else"?

    function checkAge(age) {
        if (age > 18) {
            return true;
        } else {
            // ...
            return confirm('Родители разрешили?');
        }
    }
    // no differences
    function checkAge(age) {
        if (age > 18) {
            return true;
        }
        // ...
        return confirm('Родители разрешили?');
    }

// Перепишите функцию, используя оператор '?' или '||'

function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
}


// Функция min(a, b)
function min(a, b) {
    return a < b ? a : b;
}

// Функция pow(x,n)

function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
    alert( pow(x, n) );
}
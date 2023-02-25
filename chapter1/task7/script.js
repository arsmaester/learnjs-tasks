// if (строка с нулём)
if ("0") {
    alert( 'Привет' ); // выведетс, так как "0" не пуста -> true
}

// Покажите знак числа
let value = prompt('Введите число', 0);

if (value > 0) {
    alert( 1 );
} else if (value < 0) {
    alert( -1 );
} else {
    alert( 0 );
}

// Перепишите 'if' в '?'
let result;

result = (a + b < 4) ? 'Мало' : 'Много';

// Перепишите 'if..else' в '?'
let message;
let login;

message = (login === 'Сотрудник') ? 'Привет' :
    (login === 'Директор') ? 'Здравствуйте' :
        (login === '') ? 'Нет логина' :
            '';
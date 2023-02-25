// Перепишите с использованием функции-стрелки
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}


// Хранение отметок "не прочитано"

let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

    // прочитанные сообщения лучше хранить в WeakSet, поскольку у нас значения типа "да/нет"

// Хранение времени прочтения

    // время прочтения лучше хранить в WeakMap, потому что мы хотим хранить объекты

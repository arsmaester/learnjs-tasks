// Две функции - один объект
let obj = {};

function A() {
    return obj;
}

function B() {
    return obj;
}

let a = new A();
let b = new B();

console.log(a == b); // true

// Создайте калькулятор при помощи конструктора, new Calculator

function Calculator() {

    this.read = function () {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    };

    this.sum = function () {
        return this.a + this.b;
    };

    this.mul = function () {
        return this.a * this.b;
    };
}

let calculator = new Calculator();

// Создайте new Accumulator

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        this.value += +prompt('How many to add?', 0);
    };

}
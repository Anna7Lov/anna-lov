// Task 1
function camelize(str) {
    return str
        .split('-')
        .map((elem, index) => index === 0 ? elem : elem[0].toUpperCase() + elem.slice(1))
        .join('');
}

// Task 2
function filterRange(arr, a, b) {
    return arr.filter(elem => (elem >= a && elem <= b));
}

// Task 3
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];
        if (value < a || value > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}

// Task 4
let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
alert(arr);

// Task 5
function copySorted(arr) {
    return arr.slice().sort();
}

// Task 6
function calculator() {
    const firstOperand = +prompt('Введіть перше число');
    const operator = prompt('Введіть оператор з переліку: +, -, *, /, %');
    const secondOperand = +prompt('Введіть друге число');
    switch (operator) {
        case '+':
            alert(firstOperand + secondOperand);
            break;
        case '-':
            alert(firstOperand - secondOperand);
            break;
        case '*':
            alert(firstOperand * secondOperand);
            break;
        case '/':
            alert(firstOperand / secondOperand);
            break;
        case '%':
            alert((firstOperand * secondOperand) / 100);
            break;
        default:
            alert('Помилка! Ви ввели оператора, який не підтримується');
    }
}

// Task 7
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let users = [vasya, petya, masha];
let names = users.map(elem => elem.name);
alert(names);

// Task 8
function sortByAge(users) {
    return users.sort((a, b) => a.age - b.age);
}

// Task 9
function getAverageAge(users) {
    return users.reduce((result, user) => result + user.age, 0) / users.length;
}

// Task 10
function unique(arr) {
    let arrUnique = [];
    for (let elem of arr) {
        if (!arrUnique.includes(elem)) {
            arrUnique.push(elem);
        }
    }
    return arrUnique;
}

// Task 11
function unique(arr) {
    return Array.from(new Set(arr));
}

// Task 12
function makeCounter() {
    let count = 0;
    return function () {
        return count++;
    };
}
let counter = makeCounter();
let counter2 = makeCounter();
alert(counter()); // 0
alert(counter()); // 1
alert(counter2()); // 0
alert(counter2()); // 1
/* Вони незалежні. Другий лічильник покаже 0,1. counter та counter2 створені різними викликами функції.
Для кожного виклику було створене нове лексичне оточення функції зі своїм власним count. */

// Task 13
function Counter() {
    let count = 0;
    this.up = function () {
        return ++count;
    };
    this.down = function () {
        return --count;
    };
}
let counter = new Counter();
alert(counter.up()); // 1
alert(counter.up()); // 2
alert(counter.down()); // 1
/* Лічильник працюватиме як і задумано за логікою. Покаже 1, потім 2, потім 1.
Вкладені функції мають доступ до однієї і тієї ж змінної count, бо створені з тим самим зовнішнім лексичним оточенням */

// Task 14
function factorial(n) {
    if (!n) return 1;
    return n * factorial(n - 1);
}
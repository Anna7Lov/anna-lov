// Task 1
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

// Task 2
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] = obj[key] * 2;
        }
    }
}

// Task 3
function readNumber() {
    let number;
    do {
        number = prompt('Please enter the number');
    } while (!isFinite(number));
    if (number === null || number === '') {
        return null;
    }
    return +number;
}

// Task 4
function random(min, max) {
    return Math.random() * (max - min) + min;
}

// Task 5
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Task 6
function ucFirst(str) {
    if (!str) {
        return str;
    }
    return str[0].toUpperCase() + str.slice(1);
}

// Task 7
function checkSpam(str) {
    return str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx');
}

// Task 8
function truncate(str, maxlength) {
    if (str.length <= maxlength) {
        return str;
    }
    return str.slice(0, maxlength - 3) + "...";
}

// Task 9
function extractCurrencyValue(str) {
    return +str.slice(1);
}

// Task 10
function sumInput() {
    const arr = [];
    while (true) {
        const number = prompt('Please enter the number');
        if (!isFinite(number) || number === null || number === '') break;
        arr.push(+number);
    }
    const sum = arr.reduce((result, elem) => result + elem, 0);
    return sum;
}

// Task 11
/* Відмінностей немає.
Після if з return немає обов'язкової потреби в else, бо код нижче if запускатиметься лише тоді, коли задана умова не виконується.
Якщо ми напишемо чи не напишемо else, функції спрацюють однаково. */

// Task 12
function checkAge(age) {
    return age > 18 ? true : confirm('Батьки дозволили?');
}

function checkAge(age) {
    return age > 18 || confirm('Батьки дозволили?');
}

// Task 13
function min(a, b) {
    if (a < b) {
        return a;
    }
    return b;
}

// Task 14
function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}

let x = +prompt('Please enter the number');
let n = +prompt('Please enter the power >= 1');

if (n < 1) {
    alert('Power not supported');
} else {
    alert(pow(x, n));
}

// Task 15
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}
ask(
    "Ви згодні?",
    () => alert("Ви погодилися."),
    () => alert("Ви скасували виконання.")
);

// Task 16
const income = 3333;
const expenses = 1750;
const palmCost = 8000;
function calcTimeInterval(income, expenses, palmCost) {
    const timeInterval = +((palmCost / (income - expenses)).toFixed(3));    
    const days = Math.ceil(timeInterval * 30.417);
    const months = Math.ceil(timeInterval);
    alert(`Time interval is ${timeInterval} months. You will buy a palm tree in ${days} days if you receive daily income or in ${months} months if you receive a monthly income`);
    return timeInterval;
}

// Task 17
function sumNegativeNumbers() {
    const arr = [];
    for (let i = 1; i <= 10; i++) {
        const number = +prompt('Please enter the number');
        if (number < 0) {
            arr.push(number);
        }
    }   
    const sum = arr.reduce((result, elem) => result + elem, 0);
    return sum;
}

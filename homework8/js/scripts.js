// Task 1
let i = 3;
while (i) {
    alert(i--);
} /* Останнє значення 1. Цикл буде зупинено при i = 0. Постфіксна форма повертає старе значення. 
Виведеться 3, i зменшиться до 2, потім 2, i зменшиться до 1, потім 1 , i зменшиться до 0. */

// Task 2
let a = 4;
let b = 7;
let c = 9;
if (a < b && b < c) {
    a *= 2;
    b *= 2;
    c *= 2;
} else {
    a = -a;
    b = -b;
    c = -c;
}
console.log(a);
console.log(b);
console.log(c);

// Task 3
let a = 12;
let b = 8;
let c = 6;
if (a < b && b < c || c < b && b < a) {
    a *= 2;
    b *= 2;
    c *= 2;
} else {
    a = -a;
    b = -b;
    c = -c;
}
console.log(a);
console.log(b);
console.log(c);

// Task 4
let a = 4;
let b = 7;
let c = -1;

let distanceFromB = b - a;
let distanceFromC = c - a;
if (distanceFromB < 0) {
    distanceFromB = -distanceFromB;
}
if (distanceFromC < 0) {
    distanceFromC = -distanceFromC;
}
if (distanceFromB < distanceFromC) {
    console.log(`b closer to a, distance ${distanceFromB}`);
} else if (distanceFromB > distanceFromC) {
    console.log(`c closer to a, distance ${distanceFromC}`);
} else {
    console.log('the distance is the same');
}

// Task 5
x = -1;
y = 2;
if (x === 0 && y === 0) {
    console.log(0);
} else if (y === 0) {
    console.log(1);
} else if (x === 0) {
    console.log(2);
} else {
    console.log(3);
}

// Task 6
let x = 5;
let y = -2
if (x > 0 && y > 0) {
    console.log('Номер координатної чверті - I')
} else if (x < 0 && y > 0) {
    console.log('Номер координатної чверті - II')
} else if (x < 0 && y < 0) {
    console.log('Номер координатної чверті - III')
} else {
    console.log('Номер координатної чверті - IV')
}

// Task 7
let x1 = 2;
let x2 = 11;
let x3 = 2;
let y1 = 6;
let y2 = 6;
let y3 = 2;
let x4;
let y4;

if (x1 === x2) {
    x4 = x3;
} else if (x2 === x3) {
    x4 = x1;
} else {
    x4 = x2;
}
if (y1 === y2) {
    y4 = y3;
} else if (y2 === y3) {
    y4 = y1;
} else {
    y4 = y2;
}
console.log(x4);
console.log(y4);

// Task 8
let year = 1700;
let amountOfDays;
if (year % 4 === 0 && !(year % 100 === 0 && year % 400 !== 0)) {
    amountOfDays = 366;
} else {
    amountOfDays = 365;
}
console.log(amountOfDays);

// Task 9
let number = -23;
if (number === 0) {
    console.log('нульове число');
} else if (number > 0) {
    if (number % 2 === 0) {
        console.log('позитивне парне число');
    } else {
        console.log('позитивне непарне число');
    }
} else {
    if (number % 2 === 0) {
        console.log('негативне парне число');
    } else {
        console.log('негативне непарне число');
    }
}

// Task 10
let number = 775;
let description;
if (number % 2 === 0) {
    description = 'парне';
} else {
    description = 'непарне';
}
if (number <= 9) {
    description += ' однозначне число'
} else if (number <= 99) {
    description += ' двозначне число'
} else {
    description += ' тризначне число'
}
console.log(description);

// Task 11
let i = 0;
while (++i < 5) alert(i); /* Префіксна форма повертає нове значення.
Спочатку i збільшиться, потім відбудеться порівняння та спрацює alert. Виведеться 1 і за цією логікою далі.
Тобто виведеться 1, 2, 3, 4. 
Коли i стає 5, то порівняння 5 < 5 false, тому 5 не виведеться */

let i = 0;
while (i++ < 5) alert(i); /* Постфіксна форма повертає старе значення.
Під час першого порівняння буде порівнюватися 0 з 5. Виведеться вже збільшене значення 1 і за цією логікою далі.
Виведеться 1, 2, 3, 4, 5. 
5 виведеться, бо у цьому випадку 4 порівнюється з 5, після цього виводиться 5.
Потім вже 5 порівнюється з 5, що є false. */

// Task 12
for (let i = 0; i < 5; i++) alert(i); // Виведеться 0, 1, 2, 3, 4
for (let i = 0; i < 5; ++i) alert(i); // Виведеться 0, 1, 2, 3, 4
/* Результат буде однаковим, що пов'язано з тим, як працює цикл for.
Є початок, перевірка умови, потім тіло, потім крок.
Тобто спочатку i = 0, потім перевіряємо умову i < 5, якщо true - виконуємо alert(i) і потім робимо збільшення.
Збільшення робиться окремо від перевірки умови, тому між постфіксною та префіксною формою різниця відсутня. */

// Task 13
for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Task 14
let i = 0;
while (i < 3) {
    alert(`number ${i}!`);
    i++;
}

// Task 15
let number;
do {
    number = prompt('Please enter the number greater than 100');
} while (+number <= 100 && number !== null);

// Task 16
let n = +prompt('Please enter the number');
next:
for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j === 0) continue next;
    }
    console.log(i);
}

// Task 17
let number1 = +prompt('Please enter the first number');
let number2 = +prompt('Please enter the second number');
let average = (number1 + number2) / 2;
console.log(average);

// Task 18
let number = +prompt('Please enter number');
let squareNumber = number * number; // чи Math.pow(number, 2);
console.log(squareNumber);

// Task 19
let number1 = +prompt('Please enter the first number');
let number2 = +prompt('Please enter the second number');
let number3 = +prompt('Please enter the third number');
let maxNumber = Math.max(number1, number2, number3);
let minNumber = Math.min(number1, number2, number3);
let difference = maxNumber - minNumber;
console.log(difference);

// Task 20
let number = +prompt('Please enter the number');
if (number % 2 === 0) {
    console.log('Парне');
} else {
    console.log('Непарне');
}

// Task 21
let a = 87;
let sum;
let result;
if (a <= 9) {
    sum = a;
    result = `кількість цифр 1, сума цифр ${sum}`;
} else {
    let str = a + "";
    let digit1 = +str[0];
    let digit2 = +str[1];
    sum = digit1 + digit2;
    result = `кількість цифр 2, сума цифр ${sum}`;
}
console.log(result);

// Task 22
let number = +prompt('Please enter the number');
let unit = prompt('Please enter initial value: cm or inch');
let result;
if (unit === 'cm') {
    result = (number / 2.54).toFixed(2);
    alert(`It is equal to ${result} inches`);
} else if (unit === 'inch') {
    result = (number * 2.54).toFixed(2);
    alert(`It is equal to ${result} cm`);
}

// Task 23
let isCorrect = false;
const answer1 = prompt('Перший елемент у таблиці Менделєєва?\nВвведіть відповідну літеру.\nA: Залізо\nB: Водень\nC: Магній\nD: Кальцій');
if (answer1 === null) {
    alert('Ви відмовились');
} else if (answer1 === 'B' || answer1 === 'b') {
    isCorrect = true;
    alert('Правильно!');
} else {
    alert('Ні! Правильна відповідь B. Гра закінчена');
}
if (isCorrect) {
    isCorrect = false;
    const answer2 = prompt('Столиця Австралії?\nВвведіть відповідну літеру.\nA: Сідней\nB: Мельбурн\nC: Відень\nD: Канберра');
    if (answer2 === null) {
        alert('Ви відмовились');
    } else if (answer2 === 'D' || answer2 === 'd') {
        isCorrect = true;
        alert('Правильно!');
    } else {
        alert('Ні! Правильна відповідь D. Гра закінчена');
    }
}
if (isCorrect) {
    isCorrect = false;
    const answer3 = prompt('У якому році було засновано Харків?\nВвведіть відповідну літеру.\nA: 1654\nB: 1912\nC: 1124\nD: 1842');
    if (answer3 === null) {
        alert('Ви відмовились');
    } else if (answer3 === 'A' || answer3 === 'a') {
        isCorrect = true;
        alert('Правильно! Ви виграли. Гру закінчено.');
    } else {
        alert('Ні! Правильна відповідь A. Гра закінчена');
    }
}

// Task 24
let number = prompt('Please enter a three-digit number');
if (+number % 2 === 0) {
    let sum = number.split('').reduce((result, elem) => +result + +elem);
    console.log(`Even number, sum of digits ${sum}`);
} else {
    let multiply = number.split('').reduce((result, elem) => +result * +elem);
    console.log(`Odd number, multiply of digits ${multiply}`);
} // якщо треба працювати з негативним числом, використовувати number.match(/-?\d/g),а потім reduce

// Task 25
let length1 = +prompt('Please enter first length');
let length2 = +prompt('Please enter second length');
let length3 = +prompt('Please enter third length');
if ((length1 + length2) > length3 && (length1 + length3) > length2 && (length2 + length3) > length1) {
    console.log('Трикутник може існувати');
} else {
    console.log('Трикутник не може існувати');
}

// Task 26
x = 4;
y = 9;
r = 10;
let h = Math.sqrt(x * x + y * y);
if (h > r) {
    console.log('Точка за межами кола');
} else {
    console.log('Точка всередині кола');
}

// Task 27
let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

// Task 28
const user = {
    name: "John"
};
user.name = "Pete"; /* Це спрацює, бо const від змін захищає змінну.
Змінна user зберігає посилання на об'єкт - це змінити не можна. Вміст об'єкта змінювати можна */

// Task 29
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
console.log(sum);

// Task 30
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] = obj[key] * 2;
        }
    }
}
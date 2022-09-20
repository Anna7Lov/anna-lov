// Task 1
let admin;
let name;
name = 'Ganna';
admin = name;
alert(admin);

// Task 2
const BIRTHDAY = '18.04.1982'; // Використовувати великі літери? - Так, тому що дата народження не змінюється, це постійне значення.
const AGE = someCode(BIRTHDAY); // а тут ? - Ні, вік змінюється з кожним роком. Не є постійним.

// Task 3
let name = "Ilya ";
alert(` hello ${1} `); // hello 1
alert(` hello ${"name "} `); // hello name
alert(` hello ${name} `); // hello Ilya

// Task 4
"" + 1 + 0 // '10'
"" - 1 + 0 // -1
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // '9px'
"$" + 4 + 5 // '$45'
"4" - 2 // 2
"4px" - 2 // NaN
7 / 0 // Infinity
" – 9 " + 5 // ' - 9 5'
" – 9 " - 5 // при умові " – 9 " - 5 буде NaN, при умові " -9 " - 5 буде -14
null + 1 // 1
undefined + 1 // NaN

// Task 5
let a = 1, b = 1;
let c = ++a;
let d = b++;
/* 
a = 2;
b = 2;
c = 2;
d = 1;
*/

// Task 6
let a = 2;
let x = 1 + (a *= 2);
/* 
a = 4;
x = 5;
*/

// Task 7
5 > 4 // true
"ананас" > "яблуко" // false
"2" > "12" // true
undefined == null // true
undefined === null // false
null == "\n0\n" // false
null === +"\n0\n " // false

// Task 8
let userName = prompt('What is your name?');
console.log(userName);

// Task 9
if ("0") {
    alert(' Привіт');
} // виведеться, тому що не пуста строка у логічному контексті true

// Task 10
let officialName = prompt('Яка «офіційна» назва JavaScript?');
if (officialName === 'ECMAScript') {
    alert('Правильно!');
} else {
    alert('Не знаєте? ECMAScript!');
}

// Task 11
let number = +prompt('Please type the number');
if (number > 0) {
    alert(1);
} else if (number < 0) {
    alert(-1);
} else {
    alert(0);
}

// Task 12
let result = (a + b < 4) ? 'Мало' : 'Багато';

// Task 13
let message = (login == 'Співробітник') ? 'Привіт' :
    (login == 'Директор') ? 'Добрий день!' :
    (login == '') ? 'Відсутній логін' : '';

// Task 14
alert(null || 2 || undefined); // 2    

// Task 15
alert(alert(1) || 2 || alert(3)); // 1 та потім 2

// Task 16
alert(1 && null && 2); // null

// Task 17
alert(alert(1) && alert(2)); // 1 та потім undefined

// Task 18
alert(null || 2 && 3 || 4); // 3

// Task 19
if (age >= 14 && age <= 90);

// Task 20
if (!(age >= 14 && age <= 90));
if (age < 14 || age > 90);

// Task 21
if (-1 || 0) alert('first'); // виконається, бо результат -1 в логічному контексті true
if (-1 && 0) alert('second'); // не виконається, бо результат 0 в логічному контексті false
if (null || -1 && 1) alert('third'); // виконається, бо результат 1 в логічному контексті true

// Task 22
let login = prompt('Please enter your login');
if (login === 'Адмін') {
    let password = prompt('Please enter your password');
    if (password === 'я головний') {
        alert('Здрастуйте!');
    } else if (password === null || password === '') {
        alert('Скасовано');
    } else {
        alert('Невірний пароль');
    }
} else if (login === null || login === '') {
    alert('Скасовано');
} else {
    alert('Я вас не знаю');
}

// Task 23
if (browser === 'Edge') {
    alert("You've got the Edge!");
} else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
    alert('Okay we support these browsers too');
} else {
    alert('We hope that this page looks ok!');
}

// Task 24
let a = +prompt('a?', '');
switch (a) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;
}

// Task 25
let number = +prompt('Please enter the number');
if (number > 0) {
    number += 1;
}
console.log(number);

// Task 26
let number = +prompt('Please enter the number');
if (number > 0) {
    number += 1;
} else {
    number -= 2;
}
console.log(number);

// Task 27
let number = +prompt('Please enter the number');
if (number > 0) {
    number += 1;
} else if (number < 0) {
    number -= 2;
} else {
    number = 10;
}
console.log(number);

// Task 28
let num1 = 3;
let num2 = -6;
let num3 = 89;
let quantity;
if (num1 > 0 && num2 > 0 && num3 > 0) {
    quantity = 3;
} else if (num1 < 0 && num2 < 0 && num3 < 0) {
    quantity = 0;
} else if (num1 > 0 && num2 > 0 || num2 > 0 && num3 > 0 || num1 > 0 && num3 > 0) {
    quantity = 2;
} else {
    quantity = 1;
}

// Task 29
let num1 = 3;
let num2 = -6;
let num3 = 89;
let positiveNumberQuantity;
if (num1 > 0 && num2 > 0 && num3 > 0) {
    positiveNumberQuantity = 3;
} else if (num1 < 0 && num2 < 0 && num3 < 0) {
    positiveNumberQuantity = 0;
} else if (num1 > 0 && num2 > 0 || num2 > 0 && num3 > 0 || num1 > 0 && num3 > 0) {
    positiveNumberQuantity = 2;
} else {
    positiveNumberQuantity = 1;
}
let negativeNumberQuantity = 3 - positiveNumberQuantity;

console.log(positiveNumberQuantity);
console.log(negativeNumberQuantity);

// Task 30
let num1 = 5;
let num2 = 47;
if (num1 > num2) {
    console.log(num1);
} else if (num2 > num1) { // якщо умова коли числа однакові виводить число, то можна вказати просто else, без if (num2 > num1)
    console.log(num2);
}

// Task 31
let num1 = 5;
let num2 = 47;
if (num1 < num2) {
    console.log(num1);
} else if (num2 < num1) { // якщо умова коли числа однакові виводить число, то можна вказати просто else, без if (num2 < num1)
    console.log(num2);
}

// Task 32
let num1 = 5;
let num2 = 47;
if (num1 > num2) {
    console.log(num1);
    console.log(num2);
} else if (num2 > num1) { // якщо умова коли числа однакові виводить число, то можна вказати просто else, без if (num2 > num1)
    console.log(num2);
    console.log(num1);
}

// Task 33
let a = 55;
let b = 3;
let temp;
if (a > b) {
    temp = a;
    a = b;
    b = temp;
}
console.log(a);
console.log(b);

// Task 34
let a = 6;
let b = 8;
if (a !== b) {
    a = b = a + b;
} else {
    a = b = 0;
}
console.log(a);
console.log(b);

// Task 35
let a = 4;
let b = 7;
if (a !== b) {
    if (a > b) {
        b = a;
    } else {
        a = b;
    }
} else {
    a = b = 0;
}
console.log(a);
console.log(b);

// Task 36
let a = 5;
let b = 23;
let c = 1;
let minNumber;
if (a < b && a < c) {
    minNumber = a;
} else if (b < a && b < c) {
    minNumber = b;
} else {
    minNumber = c;
}
console.log(minNumber);

// Task 37
let a = 5;
let b = 23;
let c = 1;
let middleNumber;
if (a < b && a > c || a < c && a > b) {
    middleNumber = a;
} else if (b < a && b > c || b < c && b > a) {
    middleNumber = b;
} else {
    middleNumber = c;
}
console.log(middleNumber);

// Task 38
let a = 5;
let b = 23;
let c = 1;
let minNumber;
let maxNumber;
if (a < b && a < c) {
    minNumber = a;
    if (b > c) {
        maxNumber = b;
    } else {
        maxNumber = c;
    }
} else if (b < a && b < c) {
    minNumber = b;
    if (a > c) {
        maxNumber = a;
    } else {
        maxNumber = c;
    }
} else {
    minNumber = c;
    if (a > b) {
        maxNumber = a;
    } else {
        maxNumber = b;
    }
}
console.log(minNumber);
console.log(maxNumber);

// Task 39
let a = 5;
let b = 23;
let c = 1;
let amount;
if (a < b && a < c) {
    amount = b + c;
} else if (b < a && b < c) {
    amount = a + c;
} else {
    amount = a + b;
}
console.log(amount);

// Task 40
let a = 5;
let b = 23;
let c = 5;
let differentNumber;
if (a === b) {
    differentNumber = c;
} else if (b === c) {
    differentNumber = a;
} else {
    differentNumber = b;
}
console.log(differentNumber);
'use strict';

const calc = document.querySelector('.calculator');
const viewer = document.querySelector('.viewer');
const buttonsDiv = document.querySelector('.buttons');
const operatorsDiv = document.querySelector('.operators');
const buttons = ['AC', '7', '8', '9', '4', '5', '6', '1', '2', '3', '+/-', '0', ','];
const operators = ['%', '/', 'x', '-', '+'];
let firstOperand = '';
let secondOperand = '';
let operator = '';
viewer.textContent = 0;

buttons.forEach(button => {
    const buttonElement = document.createElement('button');
    buttonElement.classList.add('button');
    buttonElement.textContent = button;
    buttonsDiv.append(buttonElement);
});

operators.forEach(operator => {
    const operatorElement = document.createElement('button');
    operatorElement.classList.add('operator');
    operatorElement.textContent = operator;
    operatorsDiv.append(operatorElement);
});

const allButtons = document.querySelector('.all-buttons');
allButtons.addEventListener('click', (e) => {
    const key = e.target.textContent;
    if (key === 'AC') {
        firstOperand = '';
        secondOperand = '';
        operator = ''
        viewer.textContent = 0;
        return;
    }

    if (firstOperand.length > 15 || secondOperand.length > 15 || firstOperand === '-' && operators.includes(key)) {
        viewer.textContent = 'Error';
        return;
    }

    if (key === "+/-") {
        if (operator === "") {
            firstOperand = plusOrMinus(firstOperand);
            viewer.textContent = `${firstOperand}`;
        } else {
            secondOperand = plusOrMinus(secondOperand);
        }
        viewer.textContent = `${firstOperand} ${operator} ${secondOperand}`;
        return;
    }

    if (buttons.includes(key)) {
        if (operator === '') {
            if (key === ',' && firstOperand.includes(',')) {
                firstOperand += '';
            } else if (firstOperand.length === 1 && firstOperand[0] === "0" && key !== ",") {
                firstOperand = '';
                firstOperand += key;
            } else {
                firstOperand += key;
            }
            viewer.textContent = firstOperand;
        } else {
            if (key === ',' && secondOperand.includes(',')) {
                secondOperand += '';
            } else if (secondOperand.length === 1 && secondOperand[0] === "0" && key !== ",") {
                secondOperand = '';
                secondOperand += key;
            } else {
                secondOperand += key;
            }
            viewer.textContent = `${firstOperand} ${operator} ${secondOperand}`;
        }        
        return;
    }

    if (operators.includes(key)) {
        if (operator !== '' && secondOperand) {
            firstOperand = calculate(firstOperand, secondOperand, operator);
        }
        operator = key;        

        if (operator && !firstOperand && !secondOperand) {
            viewer.textContent = 0;
            operator = '';
        } else {
            viewer.textContent = `${firstOperand} ${operator}`;
        }
        secondOperand = '';
        return;
    }

    if (key === '=') {
        if (!operator || !secondOperand) return;
        firstOperand = calculate(firstOperand, secondOperand, operator);
        viewer.textContent = `${firstOperand}`;
        operator = '';
        secondOperand = '';
        return;
    }
})

function plusOrMinus(operand) {
    if (operand[0] !== "-") {
        operand = "-" + operand;
    } else {
        operand = operand.substring(1, operand.length);
    }
    return operand;
}

function calculate(firstOperand, secondOperand, operator) {
    switch (operator) {
        case '+':
            return (+((+(firstOperand.replace(',', '.')) + +(secondOperand.replace(',', '.'))).toFixed(10))).toString().replace('.', ',');

        case '-':
            return (+((+(firstOperand.replace(',', '.')) - +(secondOperand.replace(',', '.'))).toFixed(10))).toString().replace('.', ',');

        case 'x':
            return (+((+(firstOperand.replace(',', '.')) * +(secondOperand.replace(',', '.'))).toFixed(10))).toString().replace('.', ',');

        case '/':
            return (+((+(firstOperand.replace(',', '.')) / +(secondOperand.replace(',', '.'))).toFixed(10))).toString().replace('.', ',');

        case '%':
            return ((+((+(firstOperand.replace(',', '.')) * +(secondOperand.replace(',', '.'))).toFixed(10))) / 100).toString().replace('.', ',');
    }
}
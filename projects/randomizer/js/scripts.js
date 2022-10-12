'use strict';

const button = document.querySelector('.button');
const maxInput = document.querySelector('#max');
const quantityInput = document.querySelector('#quantity');

button.addEventListener('click', () => {
    const min = +document.querySelector('#min').value;
    let max = +document.querySelector('#max').value;
    let quantity = +document.querySelector('#quantity').value;
    const unique = document.querySelector('#unique');
    if (min > max) {
        max = min + 1;
        maxInput.value = max;
    }
    if (unique.checked === true) {
        getUniqueNumbers(min, max, quantity);
    } else {
        getNumbers(min, max, quantity)
    }
})

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getNumbers(min, max, quantity) {
    const arr = [];
    for (let i = 1; i <= quantity; i++) {
        arr.push(getRandomNumber(min, max));
    }
    renderResult(arr);
}

function getUniqueNumbers(min, max, quantity) {
    if (quantity > (max - min + 1)) {
        quantity = max - min + 1;
        quantityInput.value = quantity;
    }
    const uniqueNumbers = new Set();
    while (uniqueNumbers.size !== quantity) {
        uniqueNumbers.add(getRandomNumber(min, max));
    }
    const uniqueArr = Array.from(uniqueNumbers);
    renderResult(uniqueArr);
}

function renderResult(numbers) {
    const list = document.querySelector('.list');
    const date = document.querySelector('.date');
    list.innerHTML = '';
    numbers.map(elem => {
        const item = document.createElement('li');
        item.classList.add('item');
        item.textContent = elem;
        list.append(item);
    })
    date.textContent = new Date().toLocaleString();
}
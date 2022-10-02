const table = document.querySelector('#age-table'); // document.getElementById('age-table')

const lables = document.querySelectorAll('#age-table label');

const firstTd = table.querySelector('td');

const searchForm = document.querySelector('form[name="search"]');

const firstInput = searchForm.querySelector('input');

const inputs = searchForm.querySelectorAll('input');
const lastInput = inputs[inputs.length - 1];
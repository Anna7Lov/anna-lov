const sideMenuButton = document.querySelector('.header__catalog-button');
const categoriesMenu = document.querySelector('.categories-menu');
sideMenuButton.addEventListener('click', handleSideMenuButtonClick);

function handleSideMenuButtonClick() {
 categoriesMenu.classList.toggle('closed');  
}

const menuButton = document.querySelector('.header__menu');
const mobileMenu = document.querySelector('.header__middle-content');
menuButton.addEventListener('click', handleMenuButtonClick);

function handleMenuButtonClick() {
  mobileMenu.classList.toggle('active');
 categoriesMenu.classList.remove('active');
 categoriesMenu.classList.add('closed');
  sideMenuButton.addEventListener('click', handleAdaptiveMenuButtonClick);
  function handleAdaptiveMenuButtonClick() {
   categoriesMenu.classList.toggle('active');  
  }
}

const sofaPointer = document.querySelector('.sofa');
const sofaProduct = document.querySelector('.sofa-product');
sofaPointer.addEventListener('click', handleSofaPointerClick);

function handleSofaPointerClick() {
  sofaProduct.classList.toggle('active-product');
}

const tablePointer = document.querySelector('.small-table');
const tableProduct = document.querySelector('.small-table-product');
tablePointer.addEventListener('click', handleTablePointerClick);

function handleTablePointerClick() {
  tableProduct.classList.toggle('active-product');
}

const coffeeTablePointer = document.querySelector('.coffee-table');
const coffeeTableProduct = document.querySelector('.coffee-table-product');
coffeeTablePointer.addEventListener('click', handleCoffeeTablePointerClick);

function handleCoffeeTablePointerClick() {
  coffeeTableProduct.classList.toggle('active-product');
}

function updateTextInput(val) {
  document.getElementById('input-value').value='$' + val; 
}
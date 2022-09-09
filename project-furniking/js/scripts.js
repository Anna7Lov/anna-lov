const sideMenuButton = document.querySelector('.header__catalog-button');
const verticalMenu = document.querySelector('.categories-menu');
sideMenuButton.onClick = handleSideMenuButtonClick;
sideMenuButton.addEventListener('click', handleSideMenuButtonClick);

function handleSideMenuButtonClick() {
  verticalMenu.classList.toggle('closed');
}

const menuButton = document.querySelector('.header__menu');
const mobileMenu = document.querySelector('.header__middle-content');
menuButton.onClick = handleMenuButtonClick;
menuButton.addEventListener('click', handleMenuButtonClick);

function handleMenuButtonClick() {
  mobileMenu.classList.toggle('active');
  verticalMenu.classList.remove('active');
  sideMenuButton.addEventListener('click', handleAdaptiveMenuButtonClick);
}

function handleAdaptiveMenuButtonClick() {
  verticalMenu.classList.toggle('active');
}

const sofaPointer = document.querySelector('.sofa');
const sofaProduct = document.querySelector('.sofa-product');
sofaPointer.onClick = handleSofaPointerClick;
sofaPointer.addEventListener('click', handleSofaPointerClick);

function handleSofaPointerClick() {
  sofaProduct.classList.toggle('active');
}

const tablePointer = document.querySelector('.table');
const tableProduct = document.querySelector('.table-product');
tablePointer.onClick = handleTablePointerClick;
tablePointer.addEventListener('click', handleTablePointerClick);

function handleTablePointerClick() {
  tableProduct.classList.toggle('active');
}

const coffeeTablePointer = document.querySelector('.coffee-table');
const coffeeTableProduct = document.querySelector('.coffee-table-product');
coffeeTablePointer.onClick = handleCoffeeTablePointerClick;
coffeeTablePointer.addEventListener('click', handleCoffeeTablePointerClick);

function handleCoffeeTablePointerClick() {
  coffeeTableProduct.classList.toggle('active');
}
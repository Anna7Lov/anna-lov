const menu = document.querySelector('.menu');
const title = document.querySelector('.title');
title.addEventListener('click', handleTitleClick);

function handleTitleClick() {
    menu.classList.toggle('opened');  
}
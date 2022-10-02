const table = document.querySelector('table');
const allTr = document.querySelectorAll('tr');

for (let i = 0; i < allTr.length; i++) {
    allTr[i].children[i].style.background = 'red';
    for (let j = 0; j < allTr[i].children.length; j++) {
        allTr[i].children[j].textContent = `${j + 1}:${i + 1}`;
    }
}
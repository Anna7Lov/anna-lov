const allLi = document.querySelectorAll('li');

for (let elem of allLi) {
    const content = elem.firstChild.textContent.trim();
    const quantity = elem.querySelectorAll('li').length;
    console.log(`${content} - ${quantity}`);
}
const list = document.createElement('ul');
document.body.append(list);

while (true) {
    const content = prompt('Введіть зміст пункту списку');
    if (content === null || content === '') break;
    const item = document.createElement('li');
    item.textContent = content;
    list.append(item);
}
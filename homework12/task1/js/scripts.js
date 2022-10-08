const cal = document.querySelector('.calendar');

function createCalendar(elem, year, month) {
    const monthIndex = month - 1;
    const daysOfWeek = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
    const date = new Date(year, monthIndex);
    const table = document.createElement('table');
    createHeader(table, daysOfWeek);
    createBody(table, daysOfWeek, date, monthIndex);
    elem.append(table);
}

function createHeader(table, daysOfWeek) {
    const trHead = document.createElement('tr');
    daysOfWeek.forEach(e => {
        const th = document.createElement('th');
        th.textContent = e;
        trHead.append(th);
    })
    table.append(trHead);
}

function createBody(table, daysOfWeek, date, monthIndex) {
    while (monthIndex === date.getMonth()) {
        const tr = document.createElement('tr');
        daysOfWeek.forEach((e, i) => {
            const td = document.createElement('td');
            const dayOfWeek = date.getUTCDay();
            if (i === dayOfWeek && monthIndex === date.getMonth()) {
                const day = date.getDate();
                td.textContent = day;
                date.setDate(day + 1);
            }
            tr.append(td);
        })
        table.append(tr);
    }
}

createCalendar(cal, 2012, 9);
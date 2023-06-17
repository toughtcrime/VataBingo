let items = [
    'Деревянный барак',
    'Дючка',
    'Нет воды в домах',
    'Нет газа в домах',
    'Двухэтажная хибара',
    'Деревянная надстройка/пристройка',
    'Хибара мутант (из разных материалов)',
    'Гаражный кооператив',
    'Хибары на фоне церкви',
    'Разъебаный асфальт',
    'Хибара в 3+ этажа',
    'Халабуда',
    'Спутниковая тарелка "Триколор" на хибаре',
    'Иномарка рядом с хибарой',
    'Деревянный гараж',
    'Название улицы или города, на которой хибара связана с совком',
    'Залет орка на хибарохантинге с фразой: "У вас также"',
    'Фолаут за окном',
    'Пластиковые окна',
    'Хибарный кооператив',
    'Хибара с просевшим фундаментом',
    'Покосившаяся хибара',
    'Березка',
    'Аварийное состояние',
    'Объявление о продаже хибары',
];
let columns = 5;
let table = document.getElementById('bingo-table');
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]];
    }
}
function createTable(rows, cols) {
    table.innerHTML = ("<tr>" + "<td></td>".repeat(cols) + "</tr>").repeat(rows);
}
function fillTable() {
    let td = document.querySelectorAll('#bingo-table td');
    for (let i = 0; i < td.length; i++) {
        el = td[i];
        el.textContent = items[i];              
    }
}
function highlightCell() {
    table.onclick = (event) => {
        let target = event.target;
        if (target.tagName != 'TD') return;
        target.classList.toggle('checked');
    }
}

shuffle(items);

createTable(parseInt(items.length/columns), columns)
fillTable();
highlightCell()
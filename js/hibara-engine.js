let items = [
    'Деревянный барак',
    'Дючка',
    'Нет воды в домах',
    'Нет газа в домах',
    'Деревянная надстройка/пристройка',
    'Гаражный кооператив',
    'Разъебаный асфальт',
    'Хибара в 3+ этажа',
    'Халабуда',
    'Спутниковая тарелка "Триколор" на хибаре',
    'Деревянный гараж',
    'Фолаут за окном',
    'Хибарный кооператив',
    'Хибара с просевшим фундаментом',
    'Покосившаяся хибара',
    'Объявление о продаже хибары',
    'Разъебанная крыша',
    'Огород рядом с хибарой',
    'Курятник рядом с хибарой',
    'Ебаный мусорник',
    'Кондиционер на хибаре',
    'Свалка',
    'Двухэтажная хибара',
    'Хибара мутант из разных материалов',
    'Хибары на фоне церкви',
    'Трехэтажная и выше хибара',
    'Огород рядом с многоквартирной хибарой',
    'Спутниковая тарелка на хибаре',
    'Иномарка рядом с хибарой',
    'Деревянный гараж/сарай',
    'Совковое название улицы',
    'У вас так же" в чате',
    'Курятник рядом с многоквартирной хибарой',
    'Пластиковые окна',
    'Аквафреш',
    'Колонка для воды на улице',
    'Аварийная, покосившаяся хибара',
    'Березка',
    'Дрова, нет отопления',
    'Реклама на хибаре, объявление о продаже хибары'
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

createTable(parseInt(5), columns)
fillTable();
highlightCell()

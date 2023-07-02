let items = [
            'Дючка',
            'Свалка',
            'Нет газа',
            'Двухэтажная хибара',
            'Деревянная надстройка/пристройка',
            'Хибара мутант из разных материалов',
            'Гаражный кооператив',
            'Хибары на фоне церкви',
            'Разъебаный асфальт',
            'Трехэтажная и выше хибара',
            'Огород рядом с многоквартирной хибарой',
            'Спутниковая тарелка на хибаре',
            'Иномарка рядом с хибарой',
            'Деревянный гараж/сарай',
            'Совковое название улицы',
            'У вас так же" в чате',
            'Курятник рядом с хибарой',
            'Пластиковые окна',
            'Аквафреш',
            'Колонка для воды на улице',
            'Аварийная, покосившаяся хибара',
            'Березка',
            'Дрова, нет отопления',
            'Реклама на хибаре, объявление о продаже хибары',
            'Хибара с просевшим фундаментом'
              
];
const columns = 5;
const rows = 5;

let table = document.getElementById('bingo-table');
const modal = document.getElementById('winner-modal');
const overlay = document.getElementById('modal-overlay');


let takesModal = document.getElementById("takes-modal");
let button = document.getElementById("showAllTakes");
let listOL = document.getElementById("all-takes");
var span = document.getElementsByClassName("close")[0];

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


function generateList()
{
    for(let i = 0; i < items.length; i++)
    {
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(items[i]));
        listOL.append(item);
    }
}


/* Modal window for showing  all sentences for game*/
function showTakesModal() {
    takesModal.style.display = "block";
    span.onclick = function() {
        takesModal.style.display = "none";
    }
}


function highlightCell() {
    table.onclick = (event)=>{
        let target = event.target;
        if (target.tagName != 'TD')
            return;
        target.classList.toggle('checked');
        if (checkWinCondition()) {
            modal.classList.add('show');
            overlay.classList.add('show');
        }
    }
}

function checkWin(arr) {

    let hWin = [];
    arr.forEach(el=>{
        if (el.classList.contains('checked')) {
            hWin.push(el);
        };
    }
    )
    if (hWin.length === rows) {
        return 1;
    }
}


const getHorizontals = function() {
    let hasWinCondition = 0;
    const lines = table.querySelectorAll('tr');
    let result = []
    for (let i = 0; i < lines.length; i++) {
        const horizontal = lines[i];
        result = [...result, horizontal.childNodes];
    }
    return result;
}

const getVerticals = function() {
    const result = [];
    const lines = table.querySelectorAll('tr');
    for (let i = 0; i < lines.length; i++) {
        const horizontal = lines[i];
        for (let j = 0; j < horizontal.childNodes.length; j++) {
            if (result[j] === undefined) {
                result[j] = [];
            }
            result[j][i] = lines[i].childNodes[j];
        }
    }
    return result;
}

const getDiagonals = function() {
    let result = [];
    let reverseResult = [];
    const lines = table.querySelectorAll('tr');
    for (let i = 0; i < lines.length; i++) {
        const horizontal = lines[i];
        for (let j = 0; j < horizontal.childNodes.length; j++) {
            if (i === j) {
                result = [...result, lines[i].childNodes[j]];
            }
            if (i + j === 4) {
                reverseResult = [...reverseResult, lines[i].childNodes[4 - i]]
            }

        }
    }
    return [result, reverseResult];
}

function checkWinCondition() {
    const arr = [...getDiagonals(), ...getHorizontals(), ...getVerticals()];
    const res = arr.map(set=>{
        return checkWin(set);
    }
    )
    return res.find(el=>el === 1);
}

function hideModal() {
    modal.classList.remove('show');
    overlay.classList.remove('show');
}


generateList();
shuffle(items);

createTable(parseInt(5), columns)
fillTable();
highlightCell();

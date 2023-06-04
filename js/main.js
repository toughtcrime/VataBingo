console.log("You was hacked by USA Hibara Hacker Group")


const takes = {
    "politician": [
        'Санкции нипочём',
        'Не всё так однозначно, всей правды мы не знаем',
        'Царь хороший, бояре плохие',
        'Политики не договорились',
        'У вас/них/всех то же самое',
        'Поставнова/фейк',
        'ЛГБТ',
    ],
    "historian": [
        'А США?',
        'Малороссия, Украину создали искуственно, украинцев придумали',
        'Крым - НАШ/русский/крымчан/божий',
        'Россия не нападала, россия не проигрывала',
        'Бандера, Шухевич, Махно',
        'Националисты, нацисты, фашисты',
        'Майдан',
    ],
    "diplomat": [
        'Право сильного',
        'Ущемление русскоговорящих',
        'Спровоцировали, не оставили выбора',
        'Клоун, наркоман, марионетка Запада',
        'Референдум, волеизъявление народа',
        'Народ Донбасса',
        'Договорняк',
    ],
    "shovel": [
        'Китай',
        'Братские народы, мыши братья',
        'СССР все для Украины построил',
        'Развал СССР - ошибка, катастрофа',
        'а Европа, а Запад?',
        'Деды воевали',
        'За Путина',
        
    ],
    "militarist": [
        'Не война, а СВО',
        'ВСУ обстреливают сами себя',
        'Ядерка, как ядерная держава может проиграть?',
        '8 лет бомбили Донбасс',
        'Азов, Айдар, Торнадо',
        'Аналогов нет',
        'НАТО',
    ]
};


function init() {

}

let items = createCategories(takes);
const columns = 5;
const rows = columns;
const table = document.getElementById('bingo-table');
const modal = document.getElementById('winner-modal');
const overlay = document.getElementById('modal-overlay');
const select = document.getElementById('select_mode');
select.addEventListener("change", (e)=>{
    setMode(select.value);
    
})

function setMode(mode) {
    if (mode === 'unselected') {
        return;
    }
    if (mode === 'random') {
        items = flatObject(takes);
        shuffle(items);
    }
    if (mode === 'categories') {
        items = createCategories(takes);
    }


    createTable(rows, columns)
    fillTable();
}

function createCategories(obj) {
    const res = Object.keys(obj).reduce((acc, k) => {
        const arr = [...obj[k]];
        shuffle(arr);
        return [...acc, ...arr.slice(0, 5)]
    }, [])
    return res;
}

function flatObject(obj) {
    return Object.keys(obj).reduce((acc, k) =>  [...acc, ...obj[k]], []);
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i],array[j]] = [array[j], array[i]];
    }
}


function createTable(rows, cols) {
    table.innerHTML = ("<tr>" + "<td class=\"bingo-cell\"></td>".repeat(cols) + "</tr>").repeat(rows);
}
function fillTable() {
    let td = document.querySelectorAll('#bingo-table td');
    for (let i = 0; i < td.length; i++) {
        el = td[i];
        el.textContent = items[i];
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
function reload() {
    window.location.reload();
}

function hideModal() {
    modal.classList.remove('show');
    overlay.classList.remove('show');
}

function checkWinCondition() {
    const arr = [...getDiagonals(), ...getHorizontals(), ...getVerticals()];
    const res = arr.map(set=>{
        return checkWin(set);
    }
    )
    return res.find(el=>el === 1);
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

function checkWin(arr) {

    let hWin = [];
    arr.forEach(el=>{
        if (el.classList.contains('checked')) {
            hWin.push(el);
        }
        ;
    }
    )
    if (hWin.length === rows) {
        return 1
    }
}


highlightCell()

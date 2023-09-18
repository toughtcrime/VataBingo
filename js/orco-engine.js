console.log("Congrutulations! You was hacked by гос.деп Шешеа");



const takes = {
    "politician": [
        'Санкції не працюють',
        'Не все так однозначно, всієї правди ми не знаємо',
        'Цар добрий, бояри погані',
        'Політики не домовилися',
        'У вас/них/всих все те ж саме',
        'Поставнова/фейк',
        'ЛГБТ',
    ],
    "historian": [
        'А США?',
        'Малоросія, Україну створили штучно, українців вигадали',
        'Крим - НАШ/російський/кримчан/божий',
        'Росія не нападала, росія не програвала',
        'Бандера, бандеривці, Шухевич, Махно',
        'Націоналісти, нацисти, фашисти',
        'Майдан',
    ],
    "diplomat": [
        'Право сильного',
        'Утиск російськомовних',
        'Спровокували, не залишили вибору',
        'Клоуни, наркомани, маріонетки',
        'Референдум, волевиявлення народу',
        'Народ Донбасу',
        'Мінські угоди',
        'Договорняк',
    ],
    "shovel": [
        'Китай',
        'Братські народи, мишібратья',
        'СРСР все для України збудував',
        'Розвал СРСР (помилка, катастрофа)',
        'а Європа, а Захід?',
        'Діди воювали',
        'За Путіна',
        
    ],
    "militarist": [
        'Не війна, а СВО',
        'ЗСУ обстрілюють самі себе',
        'Ядерка, як ядерна держава може програти?',
        '8 років бомбили Донбасс',
        'Азов, Айдар, Торнадо',
        'Аналогів немає',
        'НАТО',
    ]
};
let HibaroTakes = [
    'Дючка',
    'Смітник',
    'Немає газу',
    'Двоповерхова хібара',
    'Дерев\'яна надбудова/прибудова',
    'Хібара мутант з різних матеріалів',
    'Гаражний кооператив',
    'Хибари на фоні церкви',
    'Розйобаний асфальт',
    'Триповерхова і вище хібара',
    'Город поряд з багатоквартирною хібарою',
    'Супутникова тарілка на хібарі',
    'Іномарка поряд з хібарою',
    'Дерев\'яний гараж',
    'Совкова назва вулиці',
    'У вас так само!',
    'Курник поруч з хібарою',
    'Пластикові вікна',
    'Аквафреш',
    'Колонка для води на вулиці',
    'Аварійна халупа, що покосилася',
    'Берізка',
    'Дрова, немає опалення',
    'Реклама на хібарі, оголошення про продаж',
    'Хібара з просівшим фундаментом',
    'Хібара на контрасті (розйобана халупа на тлі пристойного житла)',
'Озеро на дорозі'      
];

let mobingoTakes = [
    'Я не знал куда меня везут',
    'Меня обманули/нас обманывают',
    'Меня заставили',
    'Бандеровцы, нацисты, фашисты',
    'НАТО',
    'США',
    'Референдум',
    'Я не стрелял (мяу-мяу)',
    'Тут вам делать нечего',
    'Мы пылинки, мы ничего не решаем',
    'Я не голосовал или голосовал за Пыню',
    'Чмобик собрал хибаробинго',
    'Выглядит на 10 лет старше своего возраста',
    '1+ ходка на зону',
    'Государственный переворот',
    'Защита Бамбаса',
    'Мы же братья',
    'Родственники за Пыню',
    'Не знают кто напал',
    'Виноваты оба',
    'Не знает почему воюет',
    'Пошел за деньги',
    'Сидит с унылым ебалом',
    'Виноват запад',
    'Всей правды мы не знаем',
    'Совколюб',
    'Боится ФСБшников/представителей власти',
    'Его никуда не отпускали, он сам ушел',
    'Переобувается в воздухе',
    'Родственники открестились от мальчика в трусиках'
]

function init() {

}
const titles = {
    Hibara: "Hibara Bingo",
    Orco: "Orco Bingo",
    Mobingo: "Mobingo"
};
let items = createCategories(takes);
const columns = 5;
const rows = columns;
const table = document.getElementById('bingo-table');
const modal = document.getElementById('winner-modal');
const overlay = document.getElementById('modal-overlay');

let takesModal = document.getElementById("takes-modal");
let button = document.getElementById("showAllTakes");
let listOL = document.getElementById("all-takes");
var span = document.getElementsByClassName("close")[0];

switch (document.title)
{
    case titles.Hibara:
        generateHibaroBingo();
    break;

    case titles.Orco:
        generateOrcoBingo();
    break;

    case titles.Mobingo:
        generateMobingo();
    break;
}


function generateOrcoBingo()
{
    const select = document.getElementById('select_mode');
    if(!Object.is(select,null))
    {
        select.addEventListener("change", (e)=> {
            setMode(select.value);
        })
    }
}

function generateMobingo()
{
    let items = mobingoTakes;
    generateList(titles.Mobingo);
    highlightCell();
    createTable(rows, columns)
    shuffle(items);
    fillTable(items);
}

function generateHibaroBingo()
{
    let items = HibaroTakes;
    generateList(titles.Hibara);
    highlightCell();
    createTable(rows, columns);
    shuffle(items);
    fillTable(items);
}


//Generating hibara bingo
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

    generateList(titles.Orco);
    highlightCell();
    createTable(rows, columns)
    fillTable(items);
    shuffle(items);
}


//Creating categories from select
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
    let arr = array;

    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i],array[j]] = [array[j], array[i]];
    }

    return arr;
}



function createTable(rows, cols) {
    table.innerHTML = ("<tr>" + "<td class=\"bingo-cell\"></td>".repeat(cols) + "</tr>").repeat(rows);
}
function fillTable(array) {
    let td = document.querySelectorAll('#bingo-table td');
    for (let i = 0; i < td.length; i++) {
        el = td[i];
        el.textContent = array[i];
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
        };
    }
    )
    if (hWin.length === rows) {
        return 1
    }
}
function generateList(whatToGenerate)
{
    let items;


    switch(whatToGenerate)
    {
        case titles.Hibara:
            items = HibaroTakes;
        break;

        case titles.Orco:
            items = flatObject(takes);
            break;
        case titles.Mobingo:
            items = mobingoTakes;
            break;
    }

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


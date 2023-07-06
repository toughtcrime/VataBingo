console.log("Congrutulations! You was hacked by гос.деп Шешеа");



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
let HibaroTakes = [
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


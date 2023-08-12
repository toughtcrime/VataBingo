const takes = {
    "politician": [
        'Sanctions don\'t work',
        'Not everything is so straightforward / we don\'t know the whole truth',
        'The tsar(Putin) is good, the boyars(his subordinates) are bad',
        'Politicians failed to come to an agreement',
        'It\'s the same thing in your/their/everyone\'s country/countries',
        'It\'s staged / it\'s fake / it\'s psyops',
        'LGBTQ+',
    ],
    "historian": [
        'Whatabout the US?',
        'Malorossiya, Ukraine is an artificially made state, Ukrainian nationality is made up',
        'Crimea is OURS/Russian/Crimeans\'/God\'s/...',
        'Russia never attacked anyone / Russia never lost a single war',
        'Bandera, Shukhevych, Makhno',
        'Nationalists, Nazis, Fascists',
        'Maidan',
    ],
    "diplomat": [
        'The Right of the Strongest',
        'Russian speakers rights are/were infringed',
        'Provoked, left with no choice / cornered',
        'Jester, drug addict, Western puppet',
        'Referendum, The will of the people',
        'The people of Donbass',
        'Minsk agreements',
        'Backroom deal(s)',
    ],
    "shovel": [
        'China',
        'Brotherly nations',
        'The USSR built all the essential infrastructure for Ukraine',
        'USSR collapse was a mistake and catastrophe',
        'Whatabout Europe and the West?',
        'Our forefathers bravely fought for us',
        'I support Putin!',
        
    ],
    "militarist": [
        'Special military operation, not war',
        'AFU are shelling themselves',
        'Nukes / How can nuclear-weapon state loose a war?',
        'Ukraine has been bombarding Donbass for 8 years',
        'Azov, Aidar, Tornado units',
        'Russian state-of-the-art tech with no counterparts',
        'NATO',
    ]
};


let HibaroTakes = [
    'Pit latrine',
    'Rubbish dump',
    'No gas supply',
    '2 storey wooden shack',
    'Wooden annexe/extension',
    'Mutant shack comprised of multiple building blocks of different materials',
    'Garage co-op, aka semi-detached garages',
    'Shack(s) next to a church',
    'Broken asphalt',
    '3+ storey wooden shack',
    'Kitchen garden next to a multi-apartment shack',
    'Satellite dish attached to a shack',
    'Foreign car parked next to a shack',
    'Wooden garage/shed/barn',
    'Soviet street name',
    '"It\'s the same where you live" message in chat',
    'Chicken coop next to a shack',
    'Plastic windows',
    'Aquafresh (ruZZian tricolour)',
    'Drinking water pump in the street',
    'Decrepit shack in a state of disrepair',
    'Birch tree',
    'Firewood, no central heating',
    'Advertisment or sale poster on a shack',
    'Shack with sinking house foundation',
    'Decrepit shack right next to decent apartments',
'Lake (gigantic puddle) on the road'      
];

let mobingoTakes = [
    'Didn\'t know where had been taken to',
    'Was deceived/we\'re being deceived',
    'I was forced to',
    'Banderites, nazis, fascists',
    'NATO',
    'USA',
    'Referendum',
    'I ain\'t shot nobody (meow-meow)',
    'There is nothing for you to do here',
    'We are mere cogs in the machine',
    'Didn\'t cast a vote during elections or voted for putin',
    'Mobik\'s hometown won in wooden shack bingo',
    'Looks 10+ years older than his real age',
    '1 or more prison sentences',
    'Coup d\'état',
    'Protection of Donbass',
    'We are brothers',
    'Relatives support putin',
    'Doesn\'t know who striked the first blow',
    'Both sides are guilty',
    'Doesn\'t know why he takes part in the war',
    'Went for easy money',
    'Has a sour mug during the interview',
    'The West is guilty',
    'We don\'t know the whole truth',
    'Tankie / jerks on the USSR',
    'Afraid of FSB / government represenatitives / law enforcement',
    'Relatives were against him leaving, he left on his own',
    'Drifts with the wind',
    'Relatives disowned the "poor innocent boy"'
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


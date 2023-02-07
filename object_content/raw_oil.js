var oil_production = {
    string_1: ['Компания', '2018', '2019', '2020', '2021', '2022'],
    string_2: ['Роснефть', '151.3', '1024', '768', '1920', '480'],
    string_3: ['Транснефть', '151.3', '1024', '768', '1920', '480'],
    string_4: ['Тюменский нефтяной научный центр (ТННЦ)', '151.3', '1024', '768', '1920', '480-1'],
    string_5: ['СамараНИПИнефть', '151.3', '1024', '768', '1920', '480'],
}

var oil_production_chart = {
    xAxis: ['2018', '2019', '2020', '2021', '2022'],
    data: [
        {
            name: 'Имя колонки 2018',
            y: 210,
        },
        {
            name: 'Имя колонки 2019',
            y: 320
        },
        {
            name: 'Имя колонки 2020',
            y: 420
        },
        {
            name: 'Имя колонки 2021',
            y: 510
        },
        {
            name: 'Имя колонки 2022',
            y: 350
        }
    ],
}



//adding table

let oil_prod = oil_production
const table_1 = document.querySelector('.infoblock__table table')
let string_1 = table_1.querySelector('#string1');
oil_prod.string_1.map(v => {
    let add = document.createElement('td');
    add.textContent = v;
    string_1.appendChild(add);
});
let string_2 = table_1.querySelector('#string2');
oil_prod.string_2.map(v => {
    let add = document.createElement('td');
    add.textContent = v;
    string_2.appendChild(add);
});
let string_3 = table_1.querySelector('#string3');
oil_prod.string_3.map(v => {
    let add = document.createElement('td');
    add.textContent = v;
    string_3.appendChild(add);
});
let string_4 = table_1.querySelector('#string4');
oil_prod.string_4.map(v => {
    let add = document.createElement('td');
    add.textContent = v;
    string_4.appendChild(add);
});
let string_5 = table_1.querySelector('#string5');
oil_prod.string_5.map(v => {
    let add = document.createElement('td');
    add.textContent = v;
    string_5.appendChild(add);
});
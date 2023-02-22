var get_arrow = "8 324.565"
var get_arrow_2 = "2 222"
var get_arrow_3 = "33 333"
var get_arrow_4 = "444 444"
var get_arrow_5 = "555 555 5"
var get_arrow_6 = "666 666"


function getArrows(id, year) {
    const get_neft =
        id === '1' && year === '2019' ?
            get_arrow :
            id === '1' && year === '2020' ?
                get_arrow_2 :
                id === '1' && year === '2021' ?
                    get_arrow_3 :
                    id === '2' && year === '2019' ?
                        get_arrow_4 :
                        id === '2' && year === '2020' ?
                            get_arrow_5 :
                            id === '2' && year === '2021' ?
                                get_arrow_6 :
        get_arrow;

    const path_title = document.querySelector('main .page-slid__container .row .scheme svg')
    path_title.querySelector('.arrow_01').innerHTML = get_neft
    path_title.querySelector('.arrow_02').innerHTML = get_neft
    path_title.querySelector('.arrow_03').innerHTML = get_neft
    path_title.querySelector('.arrow_04').innerHTML = get_neft
    path_title.querySelector('.arrow_05').innerHTML = get_neft
}

getArrows()

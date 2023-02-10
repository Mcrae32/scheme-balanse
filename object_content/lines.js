var get_oil_neft = "Попутный нефтяной газ\n1 115,4 млрд куб. м\n9 999,9 тыс. т у.т."
var get_oil_neft_2 = "test 2222"
var get_oil_neft_3 = "test 33333"
var get_oil_neft_4 = "test 444444"
var get_oil_neft_5 = "test 5555555"
var get_oil_neft_6 = "test 66666666"


function getLines(id, year) {
    const get_neft =
        id === '1' && year === '2019' ?
            get_oil_neft :
            id === '1' && year === '2020' ?
                get_oil_neft_2 :
                id === '1' && year === '2021' ?
                    get_oil_neft_3 :
                    id === '2' && year === '2019' ?
                        get_oil_neft_4 :
                        id === '2' && year === '2020' ?
                            get_oil_neft_5 :
                            id === '2' && year === '2021' ?
                                get_oil_neft_6 :
        get_oil_neft;

    const path_title = document.querySelector('main .page-slid__container .row .scheme svg')
    path_title.querySelector('.cloud_01_line_01').setAttribute('title', get_neft)
    path_title.querySelector('.cloud_01_line_02').setAttribute('title', get_neft)
    path_title.querySelector('.cloud_01_line_03').setAttribute('title', get_neft)
    path_title.querySelector('.cloud_01_line_04').setAttribute('title', get_neft)
    path_title.querySelector('.cloud_01_line_05').setAttribute('title', get_neft)
}

getLines()

var get_cloud = "1 551,12 млн куб.м"
var get_cloud_2 = "22 млн куб.м"
var get_cloud_3 = "333 млн куб.м"
var get_cloud_4 = "4444 млн куб.м"
var get_cloud_5 = "55555 млн куб.м"
var get_cloud_6 = "666666 млн куб.м"


function getClouds(id, year) {
    const get_neft =
        id === '1' && year === '2019' ?
            get_cloud :
            id === '1' && year === '2020' ?
                get_cloud_2 :
                id === '1' && year === '2021' ?
                    get_cloud_3 :
                    id === '2' && year === '2019' ?
                        get_cloud_4 :
                        id === '2' && year === '2020' ?
                            get_cloud_5 :
                            id === '2' && year === '2021' ?
                                get_cloud_6 :
                                get_cloud;

    const path_title = document.querySelector('main .page-slid__container .row .scheme svg')
    path_title.querySelector('.cloud_01').innerHTML = get_neft
    path_title.querySelector('.cloud_02').innerHTML = get_neft
    path_title.querySelector('.cloud_03').innerHTML = get_neft
    path_title.querySelector('.cloud_04').innerHTML = get_neft
}
getClouds()
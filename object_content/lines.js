var get_oil_neft = "Попутный нефтяной газ\n1 115,4 млрд куб. м\n9 999,9 тыс. т у.т."

const get_neft = get_oil_neft;
const path_title = document.querySelector('main .page-slid__container .row .scheme svg')
path_title.querySelector('.line_001').setAttribute('title', get_neft)
path_title.querySelector('.line_002').setAttribute('title', get_neft)
path_title.querySelector('.line_003').setAttribute('title', get_neft)
path_title.querySelector('.line_004').setAttribute('title', get_neft)
path_title.querySelector('.line_005').setAttribute('title', get_neft)

console.log(get_neft)
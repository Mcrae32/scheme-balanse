//tooltips
$( function() {
    $( document ).tooltip({
        track: true
    });
} );

//tabs
$( function() {
    $( ".infoblock" ).tabs();
} );

//header filter block
let topBarId = '1'
let topBarYear = '2019'
let linkItemMenuRegionFilter = document.querySelectorAll(".header__filter > .dropdown > .dropdown-menu > li > a");
let headingRegionFilter = document.querySelector(".dropdown > a.btn");
let linkItemMenuYearFilter = document.querySelectorAll(".header__filter > .filter__year > ul > li > a");
let linkItemMenuModeFilter = document.querySelectorAll(".header__filter > .filter__mode > ul > li > a");
let linkItemMenuFuelFilter = document.querySelectorAll(".header__filter > .filter__fuel > ul > li > a");
let linkItemInfoblockSelector = document.querySelectorAll(".infoblock__selector > ul > li > a");

function addingClassNameLink(links, heading) {
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function(event) {
            event.preventDefault()
            for (let j = 0; j < links.length; j++) {
                links[j].classList.remove("active")
            }
            this.classList.add("active")
            let newHeading = this.parentNode.textContent;
            if (typeof heading !== 'undefined') {
                heading.innerText = newHeading;
            }
            selectedTopBarContent(links[i])
        })
    }
}
addingClassNameLink(linkItemMenuRegionFilter, headingRegionFilter);
addingClassNameLink(linkItemMenuModeFilter);
addingClassNameLink(linkItemMenuYearFilter);
addingClassNameLink(linkItemInfoblockSelector);
addingClassNameLink(linkItemMenuFuelFilter);

//dropdown menu
let linkDropDown = document.querySelector("#dropdownMenuLink")
let dropDownMenu = document.querySelector(".header__filter > .dropdown > .dropdown-menu");

function clickOpenMenu(button, menu) {
    button.addEventListener("click", function() {
        menu.classList.toggle("show");
    })
}

function closeDropMenu(buttons, menu) {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            menu.classList.remove("show")
        })
    }
}

clickOpenMenu(linkDropDown, dropDownMenu);
closeDropMenu(linkItemMenuRegionFilter, dropDownMenu);


//heading menu
let buttonMenu = document.querySelector("button.header__menu-button");
let buttonMenuClose = document.querySelector(".slide-menu_left button.slide-menu__hide");
let headingMenu = document.querySelector(".slide-menu_left");

//slide info block
let slideInfoBlock = document.querySelector(".slide-menu_right");
let buttonInfoBlockClose = document.querySelector(".slide-menu_right button.slide-menu__hide");

function visibleMenu(button, menu){
    button.addEventListener("click", function() {
        menu.classList.remove("hidden");
        menu.classList.add("show");

        createHighcharts();
    });
}

function hideMenu(button, menu){
    button.addEventListener("click", function() {
        menu.classList.remove("show");
        menu.classList.add("hidden");
    });
}

visibleMenu(buttonMenu, headingMenu);
hideMenu(buttonMenuClose, headingMenu);

//*** show info block ***
let schemeBlocks = document.querySelectorAll(".scheme__block");
let scheme = document.querySelector(".scheme")

function informingSchemeBlocks(blocks, slidInfoBlock, closeButton) {
    for (let i = 0; i < blocks.length; i++) {
        blocks[i].addEventListener("click", function() {
            for (let j = 0; j < blocks.length; j++) {
                blocks[j].classList.remove("active")
            }
            this.classList.add("active")
        })
        
        visibleMenu(blocks[i], slidInfoBlock)

        closeButton.addEventListener("click", function() {
            for (let j = 0; j < blocks.length; j++) {
                blocks[j].classList.remove("active")
            }
            slidInfoBlock.classList.remove("show")
            slidInfoBlock.classList.add("hidden")
        })
    }

    window.addEventListener('click', e => {
        const target = e.target
        console.log(target)
        if (!target.closest('.slide-menu_right') && !target.closest('.scheme__block')) {
            for (let j = 0; j < blocks.length; j++) {
                blocks[j].classList.remove("active")
            }
            slidInfoBlock.classList.remove("show")
            slidInfoBlock.classList.add("hidden")
        }
    })
}

informingSchemeBlocks(schemeBlocks, slideInfoBlock, buttonInfoBlockClose);
  
//change top bar
function selectedTopBarContent(selected) {
    topBarId = typeof selected.id === 'string' && selected.id !== '' ? selected.id : topBarId;
    topBarYear = selected.getAttribute('year') !== null ? selected.getAttribute('year') : topBarYear;

    console.log('id = ', topBarId, topBarYear)
    getLines(topBarId, topBarYear)
    getClouds(topBarId, topBarYear)
}
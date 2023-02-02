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
            heading.innerText = newHeading;
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
    button.addEventListener("click", function(event) {
        event.preventDefault();
        menu.classList.remove("hidden");
        menu.classList.add("show");
    });
}

function hideMenu(button, menu){
    button.addEventListener("click", function(event) {
        event.preventDefault();
        menu.classList.remove("show");
        menu.classList.add("hidden");
    });
}

visibleMenu(buttonMenu, headingMenu);
hideMenu(buttonMenuClose, headingMenu);


//*** show ifo block ***
//resources raw
let resourcesRawOil = document.querySelector(".resources__raw-oil");
let resourcesPetroleumGaz = document.querySelector(".resources__petroleum-gas");



visibleMenu(buttonMenu, slideInfoBlock);
// visibleMenu(resourcesPetroleumGaz, slideInfoBlock);

hideMenu(buttonInfoBlockClose, slideInfoBlock);



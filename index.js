var tablinks = document.getElementsByClassName('tab-links')
var tabContents = document.getElementsByClassName('tab-contents')


function openTab(tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link")
    }

    for (let tabContent of tabContents) {
        tabContent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

var sideMenu = document.getElementById("sideMenu")

function openmenu() {
    sideMenu.style.right = "0"
}

function closemenu() {
    sideMenu.style.right = "-200px"
}


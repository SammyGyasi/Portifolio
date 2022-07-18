var tablinks = document.getElementsByClassName('tab-links')
var tabContents = document.getElementsByClassName('tab-contents')


function openTab(tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link")
    }

    for (let tabContent of tabContents) {
        tabContent.classList.remove("active-tab")
    }
}
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


const scriptURL = 'https://script.google.com/macros/s/AKfycbxFmbSIUHteaUssiOKDx_uWZgzJSxMB9JiISpsK4V_w4CWiGO95tD7DaI0JReXknEMi/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message Sent"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})


/*Typing Effect*/

var typed = new Typed('.auto-typing', {
    strings: ["SAMUEL"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})


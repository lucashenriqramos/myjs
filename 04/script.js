var a = document.getElementById('area')
a.addEventListener('click', click)
a.addEventListener('mouseenter', enter)
a.addEventListener('mouseout', out)

function click() {
    a.innerText = 'Clicked'
    a.style.background = 'red'
}

function enter() {
    a.innerText = 'Entered'
}

function out() {
    a.innerText = 'Out'
    a.style.background = 'green'
}
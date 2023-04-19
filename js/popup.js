let popupbgBurger = document.querySelector('.popup__bgBurger'); 
let popupBurger = document.querySelector('.popupBurger'); 
let buttonBurger = document.querySelector('.burgerButton')
let closeBurger = document.querySelector('.closeBurger')

buttonBurger.onclick = () => {
    popupbgBurger.classList.add('active'); 
    popupBurger.classList.add('active');
    document.querySelector('body').style.overflowY = 'hidden'
}

document.addEventListener('click', (e) => { 
    if(e.target === popupbgBurger || e.target === closeBurger) { 
        popupbgBurger.classList.remove('active'); 
        popupBurger.classList.remove('active'); 
        document.querySelector('body').style.overflowY = 'scroll'
    }
});

let popupbgAcc = document.querySelector('.popup__bgAcc'); 
let popupAcc = document.querySelector('.popupAcc'); 
let accButton = document.querySelector('.accButton')
let closeAcc = document.querySelector('.closeAcc')

accButton.onclick = () => {
    popupbgAcc.classList.add('active'); 
    popupAcc.classList.add('active');
    document.querySelector('body').style.overflowY = 'hidden'
    diff()
}

document.addEventListener('click', (e) => { 
    if(e.target === popupbgAcc || e.target === closeAcc) { 
        popupbgAcc.classList.remove('active'); 
        popupAcc.classList.remove('active'); 
        document.querySelector('body').style.overflowY = 'scroll'

        setTimeout (clearDiff, 500)
    }
});

let diffCont = document.querySelector('.diff')
let regButton = document.querySelector('.regButton')
let logButton = document.querySelector('.logButton')

function diff () {
    regButton.onclick = () => {
        diffCont.style.display = 'none'
        document.querySelector('.register').style.display = 'flex'
    }
    logButton.onclick = () => {
        diffCont.style.display = 'none'
        document.querySelector('.login').style.display = 'flex'
    }
}

function clearDiff () {
    document.querySelector('.register').style.display = 'none'
    document.querySelector('.login').style.display = 'none'
    diffCont.style.display = 'flex'
}

let popupbgSearch = document.querySelector('.popup__bgSearch'); 
let popupSearch = document.querySelector('.popupSearch'); 
let buttonSearch = document.querySelector('.searchSVG')


buttonSearch.onclick = () => {
    popupbgSearch.classList.add('active'); 
    popupSearch.classList.add('active');
    document.querySelector('body').style.overflowY = 'hidden'
    addPrevious()
}

document.addEventListener('click', (e) => { 
    if(e.target === popupbgSearch) { 
        popupbgSearch.classList.remove('active'); 
        popupSearch.classList.remove('active'); 
        document.querySelector('body').style.overflowY = 'scroll'
        document.querySelector('.searchPast').style.display = 'none'
    }
});

function addPrevious() {
    document.querySelector('.searchPopup').onclick = () => {
        document.querySelector('.searchPast').style.display = 'block'
    }
}
let deleteAcc = document.querySelector('.deleteAcc')
let logout = document.querySelector('.logout')

let personSettings = JSON.parse(localStorage.getItem('person'))

logout.onclick = () => {
    window.location.href = '../pages/Main page.html'
    personSettings.loginStatus = false
    localStorage.setItem('person', JSON.stringify(personSettings))
}

deleteAcc.onclick = () => {
    window.location.href = '../pages/Main page.html'
    personSettings.loginStatus = false
    personSettings.name = null
    personSettings.mail = null
    personSettings.pass = null
    localStorage.setItem('person', JSON.stringify(personSettings))
}

document.querySelector('.nameAcc').innerHTML = personSettings.name
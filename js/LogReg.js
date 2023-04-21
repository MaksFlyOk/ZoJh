let person

if (localStorage.length != 0 ){
    for(let key in localStorage) {
        if (!localStorage.hasOwnProperty(key)) {
          continue; // пропустит такие ключи, как "setItem", "getItem" и так далее
        }
        let account = JSON.parse(localStorage.getItem(key))
        if (account.loginStatus === true){
            document.querySelector('.accSVG').src = '../images/acc/accLogin.svg' 
        }
    }
}else{
    person = {
        name: null,
        mail: null,
        pass: null,
        loginStatus: false
    }
    localStorage.setItem('person', JSON.stringify(person))
}


document.querySelector('.reg').onclick = reg
document.querySelector('.log').onclick = login

function reg(){
    person = JSON.parse(localStorage.getItem('person'))
    person.name = document.querySelector('.name').value
    person.mail = document.querySelector('.mail').value
    person.pass = document.querySelector('.pass').value

    if (person.pass.length < 5 || person.name.length < 5){
        alert('Имя или пароль слишком короткие')
        return 0 
    }else if (person.pass == document.querySelector('.pass2').value & person.name != '' & person.mail != '' & person.pass != ''){
        person.loginStatus = true
        localStorage.setItem('person', JSON.stringify(person))
        popupbgAcc.classList.remove('active') 
        popupAcc.classList.remove('active')
        document.querySelector('body').style.overflowY = 'scroll'
        document.querySelector('.register').style.display = 'none'
        document.querySelector('.login').style.display = 'none'
        diffCont.style.display = 'flex'
        document.querySelector('.accSVG').src = '../images/acc/accLogin.svg'
        clearInput()
        location.reload()
        return person
    }else if(person.name == '' || person.mail == '' || document.querySelector('.pass').value == '' || person.pass == ''){
        alert('Заполните все поля')
    }else{
        person.pass = document.querySelector('.pass').value = ''
        document.querySelector('.pass2').value = ''
        alert('Пароли не совпадают')
    }
    clearInput()
    return person;
}

function clearInput() {
    document.querySelector('.pass').value = ''
    document.querySelector('.pass2').value = ''
    document.querySelector('.name').value = ''
    document.querySelector('.mail').value = ''

    document.querySelector('.mailLog').value = ''
    document.querySelector('.passLog').value = ''
}


function login() {
    let personSettings = JSON.parse(localStorage.getItem('person'))

    if ((personSettings.pass == document.querySelector('.passLog').value) && (personSettings.mail == document.querySelector('.mailLog').value)){
        person = JSON.parse(localStorage.getItem('person'))
        person.loginStatus = true
        localStorage.setItem('person', JSON.stringify(person))
        popupbgAcc.classList.remove('active') 
        popupAcc.classList.remove('active')
        document.querySelector('body').style.overflowY = 'scroll'
        document.querySelector('.register').style.display = 'none'
        document.querySelector('.login').style.display = 'none'
        diffCont.style.display = 'flex'
        document.querySelector('.accSVG').src = '../images/acc/accLogin.svg'
        clearInput()
        location.reload()
    }else if(document.querySelector('.passLog').value == '' || document.querySelector('.mailLog').value == ''){
        alert('Заполните все поля')
    }else{
        document.querySelector('.passLog').value = ''
        alert('Пароль или eMail не совпадают')
    }
}
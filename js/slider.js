
// Устанавливаем стартовый индекс слайда по умолчанию: 
let slideIndex = 1;

//? Вызываем функцию, которая реализована ниже: 
showSlides(slideIndex);

//! Устанавливаем таймер
let timer = setInterval(nextSlide, 2500);

// Функция перелистывания
function nextSlide() {
    clearInterval(timer)
    showSlides(++slideIndex);
    timer = setInterval(nextSlide, 2500);
}

//! Функции перехода на нужную картинку по нажатию
document.querySelector('.item1').onclick = () => {
    clearInterval(timer)
    showSlides(slideIndex = 1);
    timer = setInterval(nextSlide, 5000);
}

document.querySelector('.item2').onclick = () => {
    clearInterval(timer)
    showSlides(slideIndex = 2);
    timer = setInterval(nextSlide, 5000);
}

document.querySelector('.item3').onclick = () => {
    clearInterval(timer)
    showSlides(slideIndex = 3);
    timer = setInterval(nextSlide, 5000);
}

document.querySelector('.item4').onclick = () => {
    clearInterval(timer)
    showSlides(slideIndex = 4);
    timer = setInterval(nextSlide, 5000);
}

document.querySelector('.item5').onclick = () => {
    clearInterval(timer)
    showSlides(slideIndex = 5);
    timer = setInterval(nextSlide, 5000);
}


//! Функция перелистывания: 
function showSlides(n) {
    //! Обращаемся к элементам с названием класса "item", то есть к картинкам: 
    let slides = document.getElementsByClassName("itemSlide");
    
    // Проверяем количество слайдов: 
    if (n > slides.length) {
      slideIndex = 1
    }

    //! Проверяем номер item и красим соответствующий номер
    if (document.querySelector('.item1').innerHTML == slideIndex){
        document.querySelector('.item1').style.backgroundColor = 'black'
        document.querySelector('.item2').style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
        document.querySelector('.item3').style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
        document.querySelector('.item4').style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
        document.querySelector('.item5').style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
    }else if (document.querySelector('.item2').innerHTML == slideIndex){
        document.querySelector('.item1').style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
        document.querySelector('.item2').style.backgroundColor = 'black'
        document.querySelector('.item3').style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
        document.querySelector('.item4').style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
        document.querySelector('.item5').style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
    }else if (document.querySelector('.item3').innerHTML == slideIndex){
        document.querySelector('.item1').style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
        document.querySelector('.item2').style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
        document.querySelector('.item3').style.backgroundColor = 'black'
        document.querySelector('.item4').style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
        document.querySelector('.item5').style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
    }else if (document.querySelector('.item4').innerHTML == slideIndex){
        document.querySelector('.item1').style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
        document.querySelector('.item2').style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
        document.querySelector('.item3').style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
        document.querySelector('.item4').style.backgroundColor = 'black'
        document.querySelector('.item5').style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
    }else if (document.querySelector('.item5').innerHTML == slideIndex){
        document.querySelector('.item1').style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
        document.querySelector('.item2').style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
        document.querySelector('.item3').style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
        document.querySelector('.item4').style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
        document.querySelector('.item5').style.backgroundColor = 'black'
    }

    //! Проходим по каждому слайду в цикле for:
    for (let slide of slides) {
        slide.style.display = "none";
    }

    //? Делаем элемент блочным: 
    slides[slideIndex - 1].style.display = "block";
}
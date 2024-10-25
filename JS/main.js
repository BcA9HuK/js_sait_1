console.warn("Это варн");
// || - or; && - and;
//alert ("Жееесть");


// var person = null;
// if(confirm("Вы точно уверены?")){
//     person = prompt("Name?");
//     alert("Привет, " + person + "!");
// } else {
//     alert("Вы нажали отмена");
// }
var counter = 0;
function onClickButton(el){
    counter++;
    el.innerHTML = "Кликов: " + counter;
}
var logoClick = 0;
function clickLogo(el){
    logoClick++;
    if (logoClick == 20) {
        alert("Отвали от логотипа!")
    }
}

var date = new Date();
document.getElementById('date').innerHTML = date.toLocaleDateString();
document.getElementById('time').innerHTML = date.getHours() + ":" + date.getMinutes();

// Клик по тянке
var imageClicks = 0;
function onClickImage(el, event) {
    imageClicks++;
    document.getElementById('image-clicks').innerHTML = "Кликов: " + imageClicks;
    
    // Переключаем класс 'enlarged'
    el.classList.toggle('enlarged');
    
    // Убираем класс 'enlarged' через 300 мс
    setTimeout(function() {
        el.classList.remove('enlarged');
    }, 300);

    // Создаем летящий текст
    var flyingText = document.createElement('div');
    flyingText.textContent = '-1';
    flyingText.className = 'flying-text';
    flyingText.style.left = (event.clientX - 10) + 'px';
    flyingText.style.top = (event.clientY - 20) + 'px';
    
    document.body.appendChild(flyingText);

    // Удаляем элемент после завершения анимации
    setTimeout(function() {
        document.body.removeChild(flyingText);
    }, 1000);
}

function toggleMenu() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

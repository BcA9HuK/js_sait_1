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

    el.style.cssText = "background: red; color: white; border-radius: 20px 5px; font-size: 20px; "
    //alert('Вы нажали на меня!');
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
document.getElementById('main_form').addEventListener("submit", checkForm);

function checkForm(event) {
    event.preventDefault();
   var el = document.getElementById('main_form');


    var name = el.name.value;
    var e_mail = el.e_mail.value;
    var age = el.age.value;
    var sity = el.sity.value;
    var kak_sait = el.kak_sait.value;

    var fail = "";

    if(name == "" || e_mail =="" || age == "" || sity == "" || kak_sait == "")
        fail = "Заполните все поля!";
    else if(name.length <= 1 || name.length > 50)
        fail = "Введите корректное имя!";
    else if(e_mail.split("@").length != 2)
        fail = "Введите корректный e-mail!";

    if(fail != ""){
        document.getElementById('error').innerHTML = fail;
    }
    else {
        alert("Вы успешно зарегистрировались!");
        window.location = "index.html";   
    }
}

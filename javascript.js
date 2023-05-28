let login = prompt('Ведіть логін - ');
while (login !== "Admin") {
    alert("Логін невірний")
    login = prompt('Ведіть логін - ')
}
if (login == "Admin") {
    alert("Логін вірний")
}
let password = prompt('Ведіть пароль - ')
while (password !== "12345"){
    alert("Пароль невірний")
    password = prompt('Ведіть пароль - ')
}
if (password == "12345") {
    alert("Пароль вірний")
    alert("Ласкаво просимо")
}
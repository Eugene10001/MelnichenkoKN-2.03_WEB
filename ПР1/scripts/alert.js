//Пункт 2-3
alert("Євгеній Мельниченко");

// Пункт 4
let user1 = "Євгеній";
let user2 = user1;
alert(user2);

// Пункт 5
let password = prompt("Введіть пароль:");
if (password === "111") {
    alert("Рівень доступу A");
} else if (password === "222") {
     alert("Рівень доступу Б");
} else {
     alert("Доступ заборонено!!!");
}

//Пункт 6
let userName = prompt("Введіть ім'я користувача:");
if (userName === "ADMIN") {
    alert("Привіт адміністратор");
} else {
    alert("Доступ обмежений! Зверніться до адміністратора системи.");
}

//Пункт 7
let day = prompt("Введіть номер дня тижня (1-7):");
switch (day) {
    case "6":
        alert("Вихідний");
        break;
    case "7":
        alert("Вихідний");
        break;
    case "1":
        alert("Робочий день");
        break;
    case "2":
        alert("Робочий день");
        break;
    case "3":
        alert("Робочий день");
        break;
    case "4":
        alert("Робочий день");
        break;
    case "5":
        alert("Робочий день");
        break;
    default:
        alert("Некоректний номер дня тижня");
}
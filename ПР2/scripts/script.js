// Пункт 2
let person = {name: "User", age: 43, email: "example@example.com"};
for (let key in person) {
  alert(person[key]);
}

// Пункт 3
let num;
do {
  num = prompt("Введіть число більше за 100", "");
} while (num !== null && num <= 100 && num !== "");

// Пункт 4
for (let i = 2; i <= 10; i++) {
  let simple = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      simple = false;
      break;
    }
  }
  if (simple) 
    alert(i);
}

//Пункт 5
let userName = prompt("Введіть ПІБ:");
let num2 = prompt("Як часто ви буваєте в фітнес-центрі на тиждень?");
let userInfo = {
    info: userName + " - " + num2
};

alert(userInfo.info);

//Пункт 6
for (let i = 1; i <= 6; i++) {
  document.write('<img src="images/pic_' + i + '.jpg">');
  if (i === 3) document.write('<br>');
}


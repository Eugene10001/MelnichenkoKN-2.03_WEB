document.addEventListener("DOMContentLoaded", function() {
    // Пункт 1
    const slides = [
    "images/pic_1.jpg",
    "images/pic_2.jpg",
    "images/pic_3.jpg",
    "images/pic_4.jpg",
    "images/pic_5.jpg",
    "images/pic_6.jpg"
    ];

    let current = 0;

    const slideImg = document.getElementById("slide");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    prevButton.onclick = function() {
        current--;
        if (current < 0) {
            current = slides.length - 1;
        }
        slideImg.src = slides[current];
    };

    nextButton.onclick = function() {
        current++;
        if (current >= slides.length) {
            current = 0;
        }
        slideImg.src = slides[current];
    };
    
    // Пункт 2

    const countdown = document.getElementById("countdown");
    const button = document.getElementById("subscribeButton");
    const message = document.getElementById("message");

    const end = new Date().getTime() + 60000;
    const timer = setInterval(function() {
    const now = new Date().getTime();
    const left = end - now;

    if (left <= 0) {
        clearInterval(timer);
        countdown.innerHTML = "Час вийшов";
        button.disabled = true;
    } else {
        countdown.innerHTML = Math.floor(left / 1000) + " секунд";
    }
    }, 1000);

    button.onclick = function() {
        const now = new Date().getTime();
        const left = Math.max(0, Math.floor((end - now) / 1000));
        message.innerHTML = "Дякуємо за підписку! Залишалося " + left + " секунд.";
        button.disabled = true;
    };

    // Пункт 3

    const input = document.getElementById("taskInput");
    const addButton = document.getElementById("addTask");
    const list = document.getElementById("taskList");

    addButton.onclick = function() {
        const text = input.value.trim();
        if (text === "") return;

    const li = document.createElement("li");
    li.textContent = text + " ";

    const delButton = document.createElement("button");
    delButton.textContent = "Видалити";
    li.appendChild(delBtn);

    list.prepend(li);

    delButton.onclick = function() {
        delButton.remove();
        li.style.textDecoration = "line-through";
        list.appendChild(li);
    };

    input.value = "";
  };

});



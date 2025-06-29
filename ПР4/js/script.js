document.addEventListener("DOMContentLoaded", function() {
//Пункт 3, дата
const dateElement = document.querySelector(".date");
function updateDateTime() {
    const now = new Date();
    const options = {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      };
      const formattedDate = now.toLocaleString("en-US", options);
      dateElement.textContent = formattedDate;
}

updateDateTime();
setInterval(updateDateTime, 60000);

// 4 Пункт
const titleElement = document.querySelector(".tittle");

const oldText = titleElement.innerHTML;
const newText = oldText.replace("Soft", "Professional Soft");
titleElement.innerHTML = newText;

// 5 Пункт
function clearNewsBlock() {
    const newsSection = document.querySelector('section.col1');
    newsSection.innerHTML = '<h2>News & Events</h2>';
}

clearNewsBlock();

// 6 Пункт
const dataSite = { 
proSoft: [ 
"Firewall", 
"Antivirus", 
"VPN" 
], 
whyUs: [ 
"High quality", 
"Reliable", 
 "Fast" 
] 
}; 

const sorted = dataSite.proSoft.sort();

const list = document.querySelector('.prof-soft-list');

list.innerHTML = "";
for (let i = 0; i < sorted.length; i++) {
      list.innerHTML += '<li>' + sorted[i] + '</li>';
}


//7 Пункт
const sorted1 = dataSite.whyUs.sort();

  const list1 = document.querySelector('.list1');

list1.innerHTML = '';
for (let i = 0; i < sorted1.length; i++) {
    list1.innerHTML += '<li><a href="#">' + sorted1[i] + '</a></li>';
}

//8 пункт
const galleryImages = document.querySelectorAll('#myRoundabout img');

galleryImages[0].src = 'images/bg-soft.png';
});

document.addEventListener("DOMContentLoaded", function() {
const debug = document.getElementById("debug");

    fetch("https://api.rainviewer.com/public/maps.json")
      .then(res => res.json())
      .then(data => {
        if (!Array.isArray(data) || data.length === 0) {
          debug.innerText = "Немає даних.";
          return;
        }

        const safeIndex = data.length >= 2 ? data.length - 2 : data.length - 1;
        const ts = data[safeIndex];

        debug.innerText = "Таймштамп: " + ts;

        const radarUrl = `https://tilecache.rainviewer.com/v2/composite/${ts}/4000/2/0_1.png`;

        document.getElementById("radar").src = radarUrl;
      });
});

document.addEventListener("DOMContentLoaded", function() {
document.getElementById("getActivityBtn").addEventListener("click", getActivity);

function getActivity() {
    fetch("https://api.chucknorris.io/jokes/random")
        .then(response => response.json())
        .then(data => {
            const resultDiv = document.getElementById("activityResult");
            resultDiv.innerHTML = `<p>Жарт: ${data.value}</p>`;
        })
        .catch(error => {
            console.error("Помилка:", error);
            document.getElementById("activityResult").innerText = "Не вдалося отримати жарт.";
        });
}

});

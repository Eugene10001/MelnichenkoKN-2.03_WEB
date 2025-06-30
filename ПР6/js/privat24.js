document.addEventListener("DOMContentLoaded", function() {
    const fromInput = document.getElementById("from");
    const toInput = document.getElementById("to");
    const amountInput = document.getElementById("amount");
    const resultDiv = document.getElementById("result");
    const button = document.getElementById("convert");

    button.onclick = function() {
        const from = fromInput.value.toUpperCase();
        const to = toInput.value.toUpperCase();
        const amount = Number(amountInput.value);
        const url = "https://cors-anywhere.herokuapp.com/https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11";

        fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            let fromRate, toRate;
            for (let i = 0; i < data.length; i++) {
                if (data[i].ccy === from) fromRate = data[i];
                if (data[i].ccy === to) toRate = data[i];
            }

            if (from === "UAH") fromRate = { sale: 1 };
            if (to === "UAH") toRate = { buy: 1 };

            if (fromRate && toRate) {
                const uah = amount * fromRate.sale;
                const result = uah / toRate.buy;
                resultDiv.innerText = amount + " " + from + " = " + result.toFixed(2) + " " + to;
            } else {
                resultDiv.innerText = "Невірна валюта";
            }
        });
    };
});
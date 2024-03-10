const words = {
    "treated": "обработанный",
    "behavior": "поведение",
    "coercion": "принуждение",
}

const keys = Object.keys(words);
let randomValue = "";

function showWord() {
    const randomNumber = Math.floor(Math.random() * keys.length);
    const randomKey = keys[randomNumber];
    randomValue = words[randomKey];
    document.getElementById("word").innerText = randomKey;
}

function checkWords() {
    let textValue = document.getElementById('text').value;
    if (!textValue) {
        document.getElementById('dis')[0].disabled = true;
    }
    if (textValue === randomValue) {
        document.getElementById('text').value = "";
        document.getElementById('check').innerText = "верно";
    }
    if (textValue !== randomValue) {
        document.getElementById('check').innerText = "не верно";
    }
    if (document.getElementById('check').innerText === "верно") {
        showWord();
    }
}


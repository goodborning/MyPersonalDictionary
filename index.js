const words = {
    "treated": "обработанный",
    "behavior": "поведение",
    "coercion": "принуждение",
    "tremble": "дрожать",
    "leap": "скакать",
    "flutter": "порхать",
    "longing": "стремление",
    "throb": "пульсация",
    "seize": "хватать",
    "swiftly": "быстро",
    "frolic": "веселье",
    "sill": "подоконник",
    "naughty": "непослушный",
    "existing": "существующий",
    "fluent": "беглый",
    "decision": "решение",
    "hired": "нанятый",
    "mug": "кружка",
    "mankind": "человечество",
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


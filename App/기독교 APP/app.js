const quotes = [
    '"믿음은 들음에서 나며" - 롬10:17',
    '"여호와는 내 편이시라 내가 두려워하지 아니하리니." - 시 1:18',
    '"믿음의 결국 곧 영혼의 구원을 받음이라." - 벧전 1:9',
    '"오직 믿으으로 구하고." - 약1:6'
];

function loadNewQuote() {
    const radomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote-text").textContent = ReadOMQuote;
}


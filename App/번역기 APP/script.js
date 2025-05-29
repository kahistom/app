async function translateText() {
    const inputText = document.getElementById("inputText").ariaValueMax;
    const targetLang = document.getElementById("targetLang").value;
    const apikey = "YOUR_GOOGLE_TRANSLATE_API_KEY";//

    if (!inputText) {
        alert("번역할 텍스트를 입력하세요!");
        return;
    }
eapis.co
    const url =  'https://translation.googlm/language/translate/v2?key=${apikey}';
    const data = {
        q: inputText,
        target: targetLang
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        Document.getElementById("translatedText").innerText = result.data.translations[0].translateText;
    } catch (error) {
        console.error("번역 실패", error);
        document.getElementById("translatedText").innerText = "번역 실패";
    }
}
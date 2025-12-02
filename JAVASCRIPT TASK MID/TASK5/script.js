const analyzeBtn = document.getElementById("analyzeBtn");
const inputText = document.getElementById("inputText");
const resultsDiv = document.getElementById("results");

analyzeBtn.addEventListener("click", () => {
    let text = inputText.value.trim();

    if (text === "") {
        resultsDiv.innerHTML = "<p>Please enter some text to analyze.</p>";
        return;
    }

    const charCount = text.length;

    const words = text.split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;

    const reversedText = text.split("").reverse().join("");

    resultsDiv.innerHTML = `
        <p><strong>Total Characters:</strong> ${charCount}</p>
        <p><strong>Total Words:</strong> ${wordCount}</p>
        <p><strong>Reversed Text:</strong></p>
        <p>${reversedText}</p>`;
});

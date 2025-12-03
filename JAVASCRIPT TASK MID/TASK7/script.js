const paragraph = document.getElementById("sampleText");
let currentFontSize = 18; 

function changeBackground() {
    const colors = ["#ffcccc", "#ccffcc", "#ccccff", "#fff0b3", "#ffd6f0"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    paragraph.style.backgroundColor = randomColor;
}

function increaseFont() {
    currentFontSize += 2; 
    paragraph.style.fontSize = currentFontSize + "px";
}

function centerText() {
    paragraph.style.textAlign = "center";
}

function resetStyle() {
    paragraph.style.backgroundColor = "#f5f5f5";
    paragraph.style.fontSize = "18px";
    paragraph.style.textAlign = "left";
    currentFontSize = 18;
}

let darkMode = false;
const lightTheme = {
    background: "#ffffff",
    text: "#000000",
    sectionBg: "#f5f5f5"
};

const darkTheme = {
    background: "#121212",
    text: "#ffffffff",
    sectionBg: "#1f1f1f"
};

const button = document.getElementById("themeToggle");
const sections = document.querySelectorAll("header, footer, section");

button.addEventListener("click", () => {
    darkMode = !darkMode;
    if (darkMode) {
        applyTheme(darkTheme);
        button.textContent = "Switch to Light Mode";
    } else {
        applyTheme(lightTheme);
        button.textContent = "Switch to Dark Mode";
    }
});

function applyTheme(theme) {
    document.body.style.backgroundColor = theme.background;
    document.body.style.color = theme.text;
    sections.forEach(sec => {
        sec.style.backgroundColor = theme.sectionBg;
        sec.style.color = theme.text;
    });
}

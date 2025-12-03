// ===== Theme Toggle =====
const themeBtn = document.getElementById("themeToggle");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "Switch to Light Mode";
    } else {
        themeBtn.textContent = "Switch to Dark Mode";
    }
});

// ===== Time-Based Greeting =====
function updateGreeting() {
    const greeting = document.getElementById("greeting");
    const now = new Date();
    const hour = now.getHours();
    let text = "Hello!";

    if (hour >= 5 && hour < 12) text = "Good Morning!";
    else if (hour >= 12 && hour < 18) text = "Good Afternoon!";
    else text = "Good Evening!";

    greeting.textContent = text;
}
updateGreeting();

// ===== Section Toggling =====
const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = link.dataset.section;

        sections.forEach(sec => {
            if (sec.id === target) sec.classList.remove("hidden");
            else sec.classList.add("hidden");
        });
    });
});

// ===== Contact Form Validation =====
const form = document.getElementById("contactForm");
form.addEventListener("submit", function(e) {
    e.preventDefault();

    // Elements
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    let valid = true;

    // Name validation
    if (name.value.trim() === "") {
        nameError.textContent = "Name cannot be empty.";
        valid = false;
    } else {
        nameError.textContent = "";
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.match(emailPattern)) {
        emailError.textContent = "Enter a valid email address.";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    // Message validation
    if (message.value.trim().length < 10) {
        messageError.textContent = "Message must be at least 10 characters.";
        valid = false;
    } else {
        messageError.textContent = "";
    }

    if (valid) {
        alert("Form submitted successfully!");
        form.reset();
    }
});

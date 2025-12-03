const themeToggle = document.getElementById("themeToggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-theme");
  body.classList.toggle("dark-theme");

  themeToggle.innerText = body.classList.contains("light-theme")
    ? "🌙 Dark Mode"
    : "☀️ Light Mode";
});

function updateGreetingClock() {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();
  const ampm = h >= 12 ? "PM" : "AM";

  let greet = "Good Evening";
  if (h < 12) greet = "Good Morning";
  else if (h < 18) greet = "Good Afternoon";

  document.getElementById("greeting").innerText = `${greet}, Welcome to my site!`;
  document.getElementById("clock").innerText =
    `${String(h % 12 || 12).padStart(2, "0")}:` +
    `${String(m).padStart(2, "0")}:` +
    `${String(s).padStart(2, "0")} ${ampm}`;
}

setInterval(updateGreetingClock, 1000);
updateGreetingClock();

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document
      .querySelectorAll(".nav-link")
      .forEach((l) => l.classList.remove("active"));
    document
      .querySelectorAll(".section")
      .forEach((sec) => sec.classList.remove("active"));

    link.classList.add("active");
    document.getElementById(link.dataset.section).classList.add("active");
  });
});

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  document.getElementById("nameError").innerText = name ? "" : "Name required";
  document.getElementById("emailError").innerText = /^\S+@\S+\.\S+$/.test(email)
    ? ""
    : "Invalid email";
  document.getElementById("messageError").innerText =
    message.length >= 10 ? "" : "Min 10 characters";

  if (!name || !/^\S+@\S+\.\S+$/.test(email) || message.length < 10)
    valid = false;

  if (valid) {
    document.getElementById("formSuccess").innerText =
      "Message sent successfully!";
    e.target.reset();
  }
});

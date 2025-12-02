function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12; 

    const strHours = String(hours).padStart(2, '0');
    const strMinutes = String(minutes).padStart(2, '0');
    const strSeconds = String(seconds).padStart(2, '0');

    const timeString = `${strHours}:${strMinutes}:${strSeconds} ${ampm}`;

    document.getElementById("clock").textContent = timeString;
}

updateClock();

setInterval(updateClock, 1000);

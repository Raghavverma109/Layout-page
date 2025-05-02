// function for the countdown 
function startCountdown(targetDate) {
    const countdownElement = document.getElementById('countdown');
    function updateCountdown() {
        const now = new Date();
        const timeLeft = targetDate - now;

        if (timeLeft <= 0) {
            countdownElement.textContent = "Event Started!";
            clearInterval(interval);
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdownElement.textContent = `${days}d:${hours}:${minutes}:${seconds}`;
    }

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();
}

const eventDate = new Date('June 19, 2025 00:00:00');
startCountdown(eventDate);

const toggle = document.getElementById("modeToggle");
toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode", toggle.checked);
});
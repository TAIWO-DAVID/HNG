document.addEventListener("DOMContentLoaded", function() {
    function updateTimeAndDay() {
        const now = new Date();
        const utcTime = now.toUTCString().split(" ")[4];
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const day = daysOfWeek[now.getUTCDay()];

        document.getElementById("current-time").textContent = utcTime;
        document.getElementById("current-day").textContent = day;
    }

    updateTimeAndDay();
    setInterval(updateTimeAndDay, 1000); // Update every second
});

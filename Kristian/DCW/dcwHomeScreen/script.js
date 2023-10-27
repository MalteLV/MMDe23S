function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const timeString = `${hours}:${minutes}`;
  document.getElementById("time").textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);

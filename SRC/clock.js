const time = document.querySelector(".time");

function currentTime() {
  const date = new Date();
  const Hours = String(date.getHours()).padStart(2, "0");
  const Minutes = String(date.getMinutes()).padStart(2, "0");
  const Seconds = String(date.getSeconds()).padStart(2, "0");
  time.innerText = `${Hours}:${Minutes}:${Seconds}`;
}

currentTime();
setInterval(currentTime, 1000);

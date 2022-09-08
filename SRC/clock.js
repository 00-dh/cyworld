const time = document.querySelector(".time");
const day = document.querySelector(".day");

function currentTime() {
  /*current time area*/
  const date = new Date();
  const Hours = String(date.getHours()).padStart(2, "0");
  const Minutes = String(date.getMinutes()).padStart(2, "0");
  const Seconds = String(date.getSeconds()).padStart(2, "0");
  time.innerText = `${Hours}:${Minutes}:${Seconds}`;

  /*current Day area*/
  const Year = date.getFullYear();
  const Month = date.getMonth();
  const Day = date.getDate();
  let DayOfWeek = date.getDay();
  if (DayOfWeek === 0) {
    DayOfWeek = "일요일";
  } else if (DayOfWeek === 1) {
    DayOfWeek = "월요일";
  } else if (DayOfWeek === 2) {
    DayOfWeek = "화요일";
  } else if (DayOfWeek === 3) {
    DayOfWeek = "수요일";
  } else if (DayOfWeek == 4) {
    DayOfWeek = "목요일";
  } else if (DayOfWeek === 5) {
    DayOfWeek = "금요일";
  } else if (DayOfWeek === 6) {
    DayOfWeek = "토요일";
  }
  day.innerText = `${Year}년 ${Month + 1}월 ${Day}일 ${DayOfWeek}`;
}

currentTime();
setInterval(currentTime, 1000);

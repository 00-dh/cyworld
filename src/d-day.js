const d_dayForm = document.querySelector(".d-day_form");
const firstD_day = document.querySelector(".first_d-day");
const lastD_day = document.querySelector(".last_d-day");
const d_daySpan = document.querySelector(".d-day_result");

function calculateD_day(event) {
  event.preventDefault();
  console.log(
    (lastD_day.valueAsNumber - firstD_day.valueAsNumber) / (1000 * 60 * 60 * 24)
  );
  d_daySpan.innerText = `D-${
    (lastD_day.valueAsNumber - firstD_day.valueAsNumber) / (1000 * 60 * 60 * 24)
  }`;
}

d_dayForm.addEventListener("submit", calculateD_day);

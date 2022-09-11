const statusText = document.querySelector("textarea");
const statusForm = document.querySelector(
  ".left_box__profile__status-message_box"
);
const statusBtn = document.querySelector("button");
const resultText = document.querySelector(".textarea");

function uploadStatusMsg(event) {
  event.preventDefault();
  const result = statusText.value;
  resultText.innerText = result;
  statusText.value = "";
  statusText.classList.add("hidden");
  statusBtn.classList.add("hidden");
  resultText.classList.remove("hidden");
}

/* needed bug fix first, resultText div space */
/* needed bug fix second, resultText font color & text align */
statusForm.addEventListener("submit", uploadStatusMsg);

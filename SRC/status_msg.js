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
  if (statusBtn.innerText === "수정") {
    statusText.classList.remove("hidden");
    resultText.classList.add("hidden");
    statusText.value = "";
    statusBtn.innerText = "완료";
  } else if (statusBtn.innerText === "완료") {
    statusText.value = "";
    statusText.classList.add("hidden");
    statusBtn.innerText = "수정";
    resultText.classList.remove("hidden");
  }
}

/* needed bug fix second, resultText font color & text align */
statusForm.addEventListener("submit", uploadStatusMsg);

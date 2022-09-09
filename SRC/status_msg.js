const statusText = document.querySelector("textarea");
const statusForm = document.querySelector(
  ".left_box__profile__status-message_box"
);

function uploadStatusMsg(event) {
  event.preventDefault();
  console.log(statusText.value);
  statusText.value = "";
}

statusForm.addEventListener("click", uploadStatusMsg);

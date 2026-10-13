const button = document.getElementById("check-button");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  message.textContent = "Website is working successfully!";
});

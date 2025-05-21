const inputText = document.querySelector("#name-input");
const span = document.querySelector("#name-output");
inputText.addEventListener("input", (event) => {
  const inputResult = event.target.value.trim();
  if (inputResult !== "") {
    span.textContent = inputResult;
  } else {
    span.textContent = "Anonymous";
  }
});

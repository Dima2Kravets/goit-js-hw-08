const myForm = document.querySelector(".login-form");
myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const elements = event.target.elements;
  const email = elements.email.value.trim();
  const password = elements.password.value.trim();
  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }
  const obj = { email, password };
  console.log(obj);
  event.target.reset();
});

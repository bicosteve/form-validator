const validator = new Validator();

const form = document.getElementById("user_form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//event listeners
form.addEventListener("submit", (event) => {
  event.preventDefault();

  validator.checkRequired([username, email, password, password2]);
  validator.checkInputLength(username, 3, 10);
  validator.isValidEmail(email);
  validator.checkInputLength(password, 5, 10);
  validator.comparePasswords(password, password2);
  validator.submitFormInput(username, email, password, password2);

  validator.resetFormFields(username, email, password, password2);
});

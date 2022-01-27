class Validator {
  checkRequired = (arr) => {
    arr.forEach((input) => {
      if (input.value.trim() === "") {
        this.showError(input, `${this.getFieldName(input)} is required`);
      } else {
        this.showSuccess(input);
      }
    });
  };

  checkInputLength = (input, min, max) => {
    if (input.value.length < min) {
      this.showError(
        input,
        `${this.getFieldName(input)} must be atleast ${min} characters`
      );
    } else if (input.value.length > max) {
      this.showError(
        input,
        `${this.getFieldName(input)} must be less than${max} characters`
      );
    } else {
      this.showSuccess(input);
    }
  };

  isValidEmail = (input) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(input.value.trim())) {
      this.showSuccess(input);
    } else {
      this.showError(input, `${this.getFieldName(input)} is not valid email`);
    }
  };

  comparePasswords = (input, input2) => {
    if (input.value !== input2.value) {
      this.showError(
        input2,
        `${this.getFieldName(input2)} does not match ${this.getFieldName(input)}`
      );
    } else {
      this.showSuccess(input2);
    }
  };

  submitFormInput = (username, email, password, password2) => {
    if (
      username.value === "" ||
      email.value === "" ||
      password.value === "" ||
      password2.value === ""
    ) {
      return;
    } else {
      console.log({
        username: username.value,
        email: email.value,
        password: password.value,
      });
    }
  };

  resetFormFields = (username, email, password, password2) => {
    username.value = "";
    email.value = "";
    password.value = "";
    password2.value = "";
  };

  //utility functions
  getFieldName = (input) => {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
  };

  showError = (input, message) => {
    const formGroup = input.parentElement;
    formGroup.className = "form-group error";

    //show error message on small tag
    const small = formGroup.querySelector("small");
    small.innerText = message;
  };

  showSuccess = (input) => {
    const formGroup = input.parentElement;
    formGroup.className = "form-group success";
  };
}

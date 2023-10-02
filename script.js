"use strict";

function validateFirstName() {
  const firstName = document.getElementById("firstName").value;
  const firstNameMessage = document.getElementById("firstNameMessage");

  if (!firstName) {
    firstNameMessage.textContent = "Please enter your first name.";
  } else {
    firstNameMessage.textContent = "";
  }
}

function validateLastName() {
  const lastName = document.getElementById("lastName").value;
  const lastNameMessage = document.getElementById("lastNameMessage");

  if (!lastName) {
    lastNameMessage.textContent = "Please enter your last name.";
  } else {
    lastNameMessage.textContent = "";
  }
}

function validateEmail() {
  const email = document.getElementById("email").value;
  const emailMessage = document.getElementById("emailMessage");
  const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!email) {
    emailMessage.textContent = "Please enter your email address.";
  } else if (!emailRegEx.test(email)) {
    emailMessage.textContent = "Invalid email format.";
  } else {
    emailMessage.textContent = "";
  }
}

function validatePassword() {
  const password = document.getElementById("password").value;
  const passwordMessage = document.getElementById("passwordMessage");

  if (!password) {
    passwordMessage.textContent = "Please enter a password.";
  } else {
    passwordMessage.textContent = "";
  }
}

function validateConfirmPassword() {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const confirmPasswordMessage = document.getElementById(
    "confirmPasswordMessage"
  );

  if (!confirmPassword) {
    confirmPasswordMessage.textContent = "Please confirm your password.";
  } else if (password !== confirmPassword) {
    confirmPasswordMessage.textContent = "Password do not match.";
  } else {
    confirmPasswordMessage.textContent = "";
  }
}

function validateStreetAddress() {
  const streetAddress = document.getElementById("street-address").value;
  const streetAddressMessage = document.getElementById("streetAddressMessage");

  if (!streetAddress) {
    streetAddressMessage.textContent = "Please enter your street address.";
  } else {
    streetAddressMessage.textContent = "";
  }
}

function validateCity() {
  const city = document.getElementById("city").value;
  const cityMessage = document.getElementById("cityMessage");

  if (!city) {
    cityMessage.textContent = "Please enter your city.";
  } else {
    cityMessage.textContent = "";
  }
}

function validateRegion() {
  const region = document.getElementById("region").value;
  const regionMessage = document.getElementById("regionMessage");

  if (!region) {
    regionMessage.textContent = "Please enter your state/province.";
  } else {
    regionMessage.textContent = "";
  }
}

function validatePostalCode() {
  const postalCode = document.getElementById("postal-code").value;
  const postalCodeMessage = document.getElementById("postalCodeMessage");
  const postalCodeRegEx = /^[0-9]{4}(?:-[0-9]{4})?$/;

  if (!postalCode) {
    postalCodeMessage.textContent = "Please enter your ZIP/postal code.";
  } else if (!postalCodeRegEx.test(postalCode)) {
    postalCodeMessage.textContent = "Invalid ZIP/postal code format.";
  } else {
    postalCodeMessage.textContent = "";
  }
}

function validateForm() {
  validateFirstName();
  validateLastName();
  validateEmail();
  validatePassword();
  validateConfirmPassword();
  validateStreetAddress();
  validateCity();
  validateRegion();
  validatePostalCode();

  // selects all elements with the class text-red-600 Check if any error messages are displayed
  const errorMessages = document.querySelectorAll(".text-red-600");
  for (const errorMessage of errorMessages) {
    if (errorMessage.textContent !== "") {
      return false;
    }
  }

  return true;
}

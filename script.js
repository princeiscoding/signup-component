"use strict";
const freeTrialbtn = document.querySelector(".signup");
const form = document.querySelector(".info-card");
const inputFields = document.querySelectorAll(".field");

freeTrialbtn.addEventListener("click", (e) => {
  e.preventDefault();
  inputFields.forEach((field) => {
    const errorMsg = document.createElement("p");
    function displayError(message) {
      errorMsg.innerText = message;
      errorMsg.classList.add("error");
      form.insertBefore(errorMsg, field.nextSibling);
      field.style.borderColor = "red";
      field.classList.add("error-icon");
    }

    // check if there is already an error message
    if (field.nextSibling.tagName !== "P") {
      // if any field is empty
      if (!field.value) {
        errorMsg.innerText = `${field.placeholder} cannot be empty`;

        displayError(errorMsg.innerText);
        //   }
      }

      // check if the email field has a value that doesn't meet the parameters of an email adress
      else if (
        field.type === "email" &&
        (!field.value.includes(".com") || !field.value.includes("@"))
      ) {
        displayError("this does not look like an email");
      } else {
        // if there's a value and it passes the requirements
        field.style.borderColor = "black";
      }
    }
  });
});

// remove the error icon and message which is a paragraph when trying to retype the details
inputFields.forEach((field) => {
  field.addEventListener("keypress", () => {
    // remove error icon
    if (field.classList.contains("error-icon")) {
      field.classList.remove("error-icon");
    }
    // remove paragraph error message when retyping details
    if (field.nextElementSibling.tagName === "P") {
      field.nextSibling.remove();
    }
  });
});

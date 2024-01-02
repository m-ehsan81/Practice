const userNameInput = document.querySelector(".user-input");
const emailInput = document.querySelector(".email-input");
const passwordInput = document.querySelector(".pass-input");
const submitInput = document.querySelector(".submit-input");
const usernameMsg = document.querySelector(".username-msg");
const emailMsg = document.querySelector(".email-msg");
const passwordMsg = document.querySelector(".password-msg");
const statusMsg = document.querySelector(".status");

console.log(submitInput.id)

submitInput.addEventListener("click", signIn);

const userPattern = /^[\w\.-]+$/;
const emailPattern = /^[\w_\.]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;
const passPattern = /^\S{8,}$/;

function signIn(event) {
  event.preventDefault();

  const usernameValue = userNameInput.value;
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  usernameMsg.innerText = "";
  emailMsg.innerText = "";
  passwordMsg.innerText = "";

  const userValidation = userPattern.test(usernameValue);
  const emailValidation = emailPattern.test(emailValue);
  const passValidation = passPattern.test(passwordValue);

  if (usernameValue.length === 0) {
    usernameMsg.innerText = "Please enter  your username";
    return;
  } else if (!userValidation) {
    usernameMsg.innerText = "Please enter a valid username";
    return;
  }

  if (emailValue.length === 0) {
    emailMsg.innerText = "Please enter  your email";
    return;
  } else if (!emailValidation) {
    emailMsg.innerText = "Please enter a valid email";
    return;
  }

  if (passwordValue.length === 0) {
    passwordMsg.innerText = "Please enter  your password";
    return;
  } else if (!passValidation) {
    passwordMsg.innerText = "Please enter a valid password";
    return;
  }

  submitInput.disabled = true;
  setTimeout(() => {
    submitInput.disabled = false;
    if ((submitInput.id === "signUp")) {
      statusMsg.innerText = "You signed up seccessfully";
    } else {
      statusMsg.innerText = "You login seccessfully";
    }
    userNameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
  }, 1000);
}

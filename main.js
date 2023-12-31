const userNameInput = document.querySelector(".user-input");
const emailInput = document.querySelector(".email-input");
const passwordInput = document.querySelector(".pass-input");
const signinBtn = document.querySelector(".signin-button");
const usernameMsg = document.querySelector(".username-msg");
const emailMsg = document.querySelector(".email-msg");
const passwordMsg = document.querySelector(".password-msg");
const signinMsg = document.querySelector(".signin-status");

signinBtn.addEventListener("click", signIn);

const userPattern = /^[\w\.-]+$/;
const emailPattern = /^[\w_\.]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;
const passPattern = /^\S{8,}$/;

function signIn(event) {
  event.preventDefault();
  let sendData = true;

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
    sendData = false;
  } else if (!userValidation) {
    usernameMsg.innerText = "Please enter a valid username";
    sendData = false;
  }

  if (emailValue.length === 0) {
    emailMsg.innerText = "Please enter  your email";
    sendData = false;
  } else if (!emailValidation) {
    emailMsg.innerText = "Please enter a valid email";
    sendData = false;
  }

  if (passwordValue.length === 0) {
    passwordMsg.innerText = "Please enter  your password";
    sendData = false;
  } else if (!passValidation) {
    passwordMsg.innerText = "Please enter a valid password";
    sendData = false;
  }

  if (sendData) {
    signinMsg.innerText = "You signed in seccessfully";
  }
}

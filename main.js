const userNameInput = document.querySelector(".user-input");
const emailInput = document.querySelector(".email-input");
const passwordInput = document.querySelector(".pass-input");
const signinBtn = document.querySelector(".signin-button");

signinBtn.addEventListener("click", signIn);
 
function signIn(event) {
    const usernameValue = userNameInput.value;
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;
}
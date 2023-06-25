const form = document.getElementById("signup-form");
const password1 = document.getElementById("user-password");
const password2 = document.getElementById("confirm-password");
const validStatus = document.getElementById("password-check");
let passwordMatch = false;

password2.addEventListener("input", () => {
    if (password1.value != password2.value) {
        validStatus.innerHTML = "Passwords do not match.";
        passwordMatch = false;
    } else {
        validStatus.innerHTML = "";
        passwordMatch = true;
    }
});

form.onsubmit = function() {
    if (passwordMatch) {
        return true;
    } else {
        alert("Please make sure that both passwords are the same.");
        return false;
    }
}
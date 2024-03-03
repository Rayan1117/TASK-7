let passwordField = document.getElementById("password");
document.addEventListener('DOMContentLoaded', function () {
    let emailField = document.getElementById("email");
    let button = document.getElementById("btn");

    emailField.addEventListener("focus", function () {
        emailField.placeholder = "enter your email";
    })
    emailField.addEventListener("blur", function () {
        emailField.placeholder = "Email";
    })

    passwordField.addEventListener("focus", function () {
        passwordField.placeholder = "enter your password";
    })

    passwordField.addEventListener("blur", function () {
        passwordField.placeholder = "Password";
    })
    button.addEventListener("mouseover", function () {
        button.style = "background-color:aliceblue"
    })
    button.addEventListener("mouseout", function () {
        button.style = "background-color:white"
    })
    button.addEventListener("click", function () {
        button.style = "background-color:gray";
        setTimeout(() => {
            button.style = "background-color:white";
        }, 50);
    })

})

function togglePasswordVisibility() {
    var toggleIcon = document.getElementById("togglePassword");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleIcon.src = "hidden.png"; 
    } else {
        passwordField.type = "password";
        toggleIcon.src = "eye.png"; 
    }
}

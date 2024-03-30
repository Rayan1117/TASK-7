let passwordField = document.getElementById("password");
    let emailField = document.getElementById("email");
    let button = document.getElementById("btn");
document.addEventListener('DOMContentLoaded', function () {

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
        button.style = "background-color:#0056b3"
    })
    button.addEventListener("mouseout", function () {
        button.style = "background-color:#006aff"
    })
    button.addEventListener("click", function () {
        button.style = "background-color:#0056b3";
        setTimeout(() => {
            button.style = "background-color:#006aff";
        }, 100);
    })

    button.addEventListener("click", function (event) {
        event.preventDefault();
    
        if (emailField.validity.valid && passwordField.validity.valid) {
            var snackbar = document.createElement("div");
            snackbar.className = "snackbar";
            snackbar.textContent = "Login Successful";
    
            document.body.appendChild(snackbar);
    
            setTimeout(function() {
                snackbar.remove();
            }, 5000);
        }
    });
});

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

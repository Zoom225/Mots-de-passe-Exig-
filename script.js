function checkPassword() {
    // Récupérer la valeur du mot de passe
    var password = document.getElementById("password").value;

    // Définir les critères de validation
    var minLength = 8;
    var hasUppercase = /[A-Z]/.test(password);
    var hasLowercase = /[a-z]/.test(password);
    var hasDigit = /\d/.test(password);

    // Vérifier si le mot de passe respecte les critères
    if (password.length >= minLength && hasUppercase && hasLowercase && hasDigit) {
        setMessage("Le mot de passe est fort.", "green");
    } else {
        setMessage("Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule et un chiffre.", "red");
    }
}

function setMessage(message, color) {
    var messageElement = document.getElementById("message");
    messageElement.textContent = message;
    messageElement.style.color = color;
}
if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePasswordButton.textContent = "👁️";
} else {
    passwordInput.type = "password";
    togglePasswordButton.textContent = "👁️";
}
function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var togglePasswordButton = document.getElementById("togglePassword");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePasswordButton.textContent = "👁️";
    } else {
        passwordInput.type = "password";
        togglePasswordButton.textContent = "👁️";
    }
}
let prompt = require("prompt-sync")();
let password = prompt("Enter the password: ");
if (password.length >= 8) {
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
        if (/[@#$%^&*]/.test(password)) {
            if (/[0-9]/.test(password)) {
                console.log("Strong password!");
            } else {
                console.log("Your password is weak. It should contain at least one digit.");
            }
        } else {
            console.log("Your password is weak. It should contain at least one special character (!@#$%^&*).");
        }
    } else {
        console.log("Your password is weak. It should contain at least one lowercase letter and one uppercase letter.");
    }
} else {
    console.log("Your password is too short. It should be at least 8 characters long.");
}

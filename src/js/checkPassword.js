// Asynchronous function to check if the email is already registered

// Function to check if the entered password matches the confirmation password
export function checkPassword(password, confirmPassword) {

    if (password.value === confirmPassword.value) {
        console.log("Email is already registered");
        return true// Passwords match
    } else {
        console.log("Email is no already registered")
        return false // Passwords don't match
    }
}


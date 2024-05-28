// Asynchronous function to check if the email is already registered

// Function to check if the entered password matches the confirmation password
export function checkPassword(password, confirmPassword) {

    if (password.value === confirmPassword.value) {
        return true // Passwords match
    } else {
        
        return false // Passwords don't match
    }
}


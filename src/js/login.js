import { checkEmail } from "./checkEmail"
(function () {
    const userSesion = localStorage.getItem("userSesion")
    if (userSesion != null) {
        window.location.href = "/dashboard"
    }
})()

export function login(formSelector, emailSelector, passwordSelector){
// Select the login form
const form = document.querySelector(formSelector)

// Select the input fields from the form
const email = document.getElementById(emailSelector)
const password = document.getElementById(passwordSelector)

// Event listener for form submission
form.addEventListener("submit", async (event) => {
    event.preventDefault()

    // Check if the email exists in the databas
    const user = await checkEmail(email)

    if (user === false) {
        // If user doesn't exist, show alert    
        alert("El usuario no esta registrado")
    } else {

        // If password matches, log in and redirect to dashboard
        if (user.password === password.value) {
            alert("Bienvenido")
            localStorage.setItem("userSesion", JSON.stringify(user))
            window.location.href = "/dashboard"
        } else {
            // If password doesn't match, show alert
            alert("contraseña incorrecta")
        }
    }
})
}

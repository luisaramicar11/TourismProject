import { checkEmailLogin} from "./checkEmailLogin.js"

export async function login(formSelector, emailSelector, passwordSelector){
    console.log("entre al login")
// Select the login form
const form = document.querySelector(formSelector)
console.log(form)
// Select the input fields from the form
const email = document.querySelector(emailSelector)
const password = document.querySelector(passwordSelector)

// Event listener for form submission
form.addEventListener("submit", async (event) => {
    event.preventDefault()

    // Check if the email exists in the databas
    const user = await checkEmailLogin(email.value)
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

// Function to check if the email exists in the database
}

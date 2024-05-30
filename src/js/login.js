import { checkEmailLogin} from "./checkEmailLogin.js"
import { showAlertSuccess, showAlertError, showAlertWarning } from "./alerts.js";

export async function login(formSelector, emailSelector, passwordSelector){
    console.log("entre al login")
// Select the login form
const form = document.querySelector(formSelector)
console.log(form)
// Select the input fields from the form
const email = document.querySelector(emailSelector)
const password = document.querySelector(passwordSelector)

console.log(email)
console.log(password)

// Event listener for form submission
form.addEventListener("submit", async (event) => {
    event.preventDefault()

    // Check if the email exists in the databas
    const user = await checkEmailLogin(email.value)
    console.log(user)
    if (user === false) {
        // If user doesn't exist, show alert  
        showAlertWarning ("El usuario no esta registrado")  
        //alert("El usuario no esta registrado")
        setTimeout(() => {
            window.location.href="/signup"
        }, 2000);
        
    } else {
        // If password matches, log in and redirect to dashboard
        if (user.password === password.value) {
            setTimeout(() => {
                showAlertSuccess("Bienvenido");  
            }, 2000);
            localStorage.setItem("userSesion", JSON.stringify(user))
            window.location.href = "/dashboard"
        } else {
            // If password doesn't match, show alert
            showAlertError("Contraseña incorrecta") 
            //alert("contraseña incorrecta")
        }
    }
})

// Function to check if the email exists in the database
}







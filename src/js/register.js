//Import the function that show a better alerts
import { showAlertSuccess, showAlertError, showAlertWarning } from "./alerts.js"

//calling the form by it ID
const form = document.getElementById("register-form")


// Selecting input fields from the form
const userName = document.getElementById("user-name")
const lastName = document.getElementById("last-name")
const email = document.querySelector(".email")
const password = document.querySelector(".password")
const confirmPassword = document.getElementById("confirm-password")


// Event listener for form submission
form.addEventListener("submit", async (event) => {
    event.preventDefault()
    

    // Check if the entered email is already registered
    const revisionEmail = await checkEmail(email)

     // Check if the entered password matches the confirmation password
    const revisionPassword = checkPassword(password, confirmPassword)

    // If email and password are valid, register the user
    if ((revisionEmail === true) && (revisionPassword === true)) {
        registerUser(userName, lastName, email, password)
        showAlertSuccess("Su perfil fue creado con exito")
        window.location.href = "/"// Redirect to homepage after successful registration
      }
      // If email is valid but password is not , send the massage "las contraseñas no coinsiden"
      if ((revisionEmail === true) && (revisionPassword === false)) {
        showAlertWarning("Las contraseñas no coinsiden")
      } 
      //Else send the message "el correo ya fue utilizado"
       else {
        showAlertError("El correo ya fue utilizado")
      }
})


// Asynchronous function to check if the email is already registered
async function checkEmail(email) {
    const response = await fetch(`http://localhost:3000/userTroll?email=${email.value}`)
    const data = await response.json()


    
    if (data.length > 0) {
        return false // Email is not registered
    } else {
        return true // Email already exists
    }
}

// Function to check if the entered password matches the confirmation password
function checkPassword(password, confirmPassword) {
    
    if (password.value === confirmPassword.value) {
        return true // Passwords match
    } else {
        
        return false // Passwords don't match
    }
}

// Function to register the user
async function registerUser(userName, lastName, email, password) {
    

    const newUser = {
        userName: userName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value
    }

    // Send a POST request to register the user
    await fetch(`http://localhost:3000/userTroll`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    })
}





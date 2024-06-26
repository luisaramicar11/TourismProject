//Import the function that show a better alerts
import { showAlertSuccess, showAlertError, showAlertWarning } from "./alerts.js";
import {registerUser} from "./registerUser.js"
import { checkPassword } from "./checkPassword.js";
import { checkEmail } from "./checkEmail.js";

export function register(formSelector, userNameSelector, lastNameSelector, emailSelector, passwordSelector, confirmPasswordSelector, traigoInfoSelector){
    console.log("entre a registro")
    //register-form
    //calling the form by it ID
let form = document.querySelector(formSelector)

console.log(form)

// Selecting input fields from the form
let userName = document.querySelector(userNameSelector)
let lastName = document.querySelector(lastNameSelector)
let email = document.querySelector(emailSelector)
let password = document.querySelector(passwordSelector)
let confirmPassword = document.querySelector(confirmPasswordSelector)

// Event listener for form submission
form.addEventListener("submit", async (event) => {
    event.preventDefault()
    console.log('Email value before check:', email.value);
    // Check if the entered email is already registered
    const revisionEmail = await checkEmail(email)

     // Check if the entered password matches the confirmation password
    const revisionPassword = checkPassword(password, confirmPassword)
  alert(revisionEmail, "email")
  alert(revisionPassword, "password")
    // If email and password are valid, register the user
    if ((revisionEmail === true) && (revisionPassword === true)) {
        await registerUser(userName, lastName, email, password)
        setTimeout(() => {
          showAlertSuccess("Su perfil fue creado con éxito")
        }, 2000);
        window.location.href = "/signin"// Redirect signing after successful registration
      }
      // If email is valid but password is not , send the massage "las contraseñas no coinsiden"
      else if ((revisionEmail === true) && (revisionPassword === false)) {
        showAlertWarning("Las contraseñas no coinciden")
      } 
      //Else send the message "el correo ya fue utilizado"
       else if (revisionEmail === false){
        console.log("el correo ya fue utilizado")
        showAlertError("El correo ya fue utilizado")
      }
})

}

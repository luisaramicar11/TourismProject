
function checkPassword(passwordNew, confirmPasswordNew) {
    console.log("entre")
    let password=document.querySelector(passwordNew)
    let confirmPassword=document.querySelector(confirmPasswordNew)
    console.log(password)
    console.log(confirmPassword)
    if (password.value === confirmPassword.value) {
        return true // Passwords match
    } else {
        
        return false // Passwords don't match
    }
}
export function register(emailNew, passwordNew, userNameNew, lastNameNew, confirmPasswordNew, formNew){
    let email = document.querySelector(emailNew);
    let password = document.querySelector(passwordNew)
    let userName = document.querySelector(userNameNew)
    let lastName = document.querySelector(lastNameNew)
    let confirmPassword = document.querySelector(confirmPasswordNew)
    let form = document.querySelector(formNew)
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
function showAlertSuccess(message) {
    Toast.fire({
        icon: "success",// Display a success icon
        title: message // Display the provided message
    });
}
function showAlertError(message) {
    Toast.fire({
        icon: "error",// Display a success icon
        title: message // Display the provided message
    });
}
function showAlertWarning(message) {
    Toast.fire({
        icon: "warning",// Display a success icon
        title: message // Display the provided message
    });
}

}




(function () {
    const userSesion = localStorage.getItem("userSesion")
    if (userSesion != null) {
        window.location.href = "./pages/dashboard.html"
    }
})()
// Select the login form
const form = document.querySelector("form")

// Select the input fields from the form
const email = document.getElementById("email")
const password = document.getElementById("password")

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
            window.location.href = "./src/pages/dashboard.html"
        } else {
            // If password doesn't match, show alert
            alert("contraseña incorrecta")
        }
    }
})

// Function to check if the email exists in the database
async function checkEmail(email) {

    // Fetch user data based on the entered email
    const response = await fetch(`http://localhost:3000/userTroll?email=${email.value}`)
    const data = await response.json()


    if (data.length === 1) {
        //verificacion de no repeticion de Emails
        return data[0]
    } else {
        // If user doesn't exist, return false
        return false
    }
}
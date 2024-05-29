// Asynchronous function to check if the email is already registered
export async function checkEmail(email) {
    //traemos a todos los usuarios que tengan el email que se ingresa
    const response = await fetch(`http://localhost:3000/userTroll?email=${email.value}`)
    const data = await response.json()
    //verificacion de no repeticion de Emails
    if (data.length > 0) {
        return false
    } else {
        return true
    }
}
// Asynchronous function to check if the email is already registered
export async function checkEmail(email) {
    const response = await fetch(`http://localhost:3000/userTroll?email=${email.value}`)
    const data = await response.json()
  
    if (data.length > 0) {
        //verificacion de no repeticion de Emails
        return false
    } else {
        // If user doesn't exist, return false
        return true
    }
}

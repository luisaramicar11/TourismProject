// Asynchronous function to check if the email is already registered
export async function checkEmail(email) {
    const response = await fetch(`http://localhost:3000/userTroll?email=${email.value}`)
    const data = await response.json()
    
    if (data.length > 0) {
        return false // Email is not registered
    } else {
        return true // Email already exists
    }
}
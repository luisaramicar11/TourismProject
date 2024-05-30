// Asynchronous function to check if the email is already registered
export async function checkEmail(email) {
    const response = await fetch(`http://localhost:3000/userTroll?email=${email.value}`)
    const data = await response.json()
    console.log(data)
    alert(data, "data")
    alert(email.value, "email")
    if (data.length > 0) {
        //verificacion de no repeticion de Emails
        console.log("ya esta creado")
        return false
    } else {
        // If user doesn't exist, return false
        console.log("no esta creado")
        return true
    }
}

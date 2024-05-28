// Function to check if the email exists in the database
export async function checkEmailLogin(email) {
console.log("entre a checkear el login")

    // Fetch user data based on the entered email
    const response = await fetch(`http://localhost:3000/userTroll?email=${email}`)
    const data = await response.json()


    if (data.length === 1) {
        //verificacion de no repeticion de Emails
        return data[0]
    } else {
        // If user doesn't exist, return false
        return false
    }
}
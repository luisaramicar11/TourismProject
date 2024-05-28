// Function to register the user
export async function registerUser(userName, lastName, email, password) {
    
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

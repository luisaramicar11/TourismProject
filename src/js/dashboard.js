/* (function () {
    const userSesion = localStorage.getItem("userSesion")
    if (userSesion == null) {
        window.location.href = "/signin"
    }
})() */

export function dashboard(btnLogoutSelector, nameUser, emailUser){
    console.log("entre")
    const btnLogout = document.getElementById(btnLogoutSelector)
    console.log(btnLogout)

btnLogout.addEventListener("click", (e) => {
    localStorage.removeItem("userSesion")
    window.location.href = "/"
})

const userString = localStorage.getItem('user');
const user = JSON.parse(userString);
console.log(user)

// Verificar si el usuario existe en el localStorage
if (user) {
    // Actualizar la información en el HTML
    const nombreUsuarioElemento = document.querySelector(nameUser);
    if (nombreUsuarioElemento) {
        nombreUsuarioElemento.textContent = `${user.userName} ${user.lastName}`;
    }

    const correoElemento = document.querySelector(emailUser);
    if (correoElemento) {
        correoElemento.textContent = `${user.email}`;
    }
}

}

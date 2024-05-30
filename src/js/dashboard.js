/* (function () {
    const userSesion = localStorage.getItem("userSesion")
    if (userSesion == null) {
        window.location.href = "/signin"
    }
})() */

export function dashboard(){
    console.log("entre")
    const btnLogout = document.getElementById('btn-logout')
    console.log(btnLogout)

btnLogout.addEventListener("click", () => {
    localStorage.removeItem("userSesion")
    window.location.href = "/"
})

const userString = localStorage.getItem('user');
const user = JSON.parse(userString);
console.log(user)

let registerUser

// // Obtener todas las claves del localStorage
const keys = Object.keys(localStorage);

// // Iterar sobre las claves y obtener los valores
keys.forEach(function () {
    const value = localStorage.getItem('userSesion');
    console.log(value)
    registerUser = JSON.parse(value);;
});

const userName = registerUser.userName
const lastName = registerUser.lastName
const email = registerUser.email
const idUser = registerUser.id
const registerUserHTML = document.getElementById("personalInfo")
const firstLetterName = userName.charAt(0).toUpperCase()
const firstLetterLastName = lastName.charAt(0).toUpperCase()

console.log(userName);
console.log(lastName);
console.log(email);
console.log(idUser);

registerUserHTML.innerHTML=`
            <div class="d-flex pt-5 gap-4" style="width:100%; height: 23vw;">
                <div class="rounded-circle " style="background-color: #490019; width: 12vw; height: 12vw">
                    <span class="d-flex justify-content-center" style="font-size: 8vw; color:white">
                        ${firstLetterName}${firstLetterLastName}
                    </span>
                </div>
                <div class="d-flex align-items-center" style="width: 74%;height: 12vw">
                    <h3 class="text-center "
                        style="font-size: 3.6vw; border-bottom: solid #490019; color:#490019; width: 100%;" data-i18n="welcome">¡Bienvenido
                        ${userName} ${lastName}!</h3>
                </div>
            </div>
            <div class="mt-3"  style="width: 100%;">
                <div class="" style="width: 100%; height: 50%;">
                    <div class="rounded-top-1 text-center" style="background-color: #490019; color:white; font-size: 1.8vw" data-i18n="persInf">
                        Información Personal
                    </div>
                    <div class="card-body rounded-bottom-1 px-4 pt-2" style="font-size: 1.5vw" data-i18n="name">
                            <p><span>ID: ${idUser}</span> | Nombre de usuario: ${userName} ${lastName} </p>
                            <footer class="blockquote-footer" data-i18n="email">Correo Electrónico <cite
                                    title="Source Title">${email}</cite>
                            </footer>
                    </div>
                </div>
            </div>
            <div class="mt-3 gap-2 d-flex" style="width: 100%;">
                <div class="" style="width: 25%; height: 100%;">
                    <div class="rounded-top-1 text-center" style="background-color: #490019; color:white; font-size: 1.7vw">
                        ID
                    </div>
                    <div class="card-body rounded-bottom-1 px-4 pt-2" style="font-size: 1.5vw">
                            <p><span>ID: ${idUser}</span> | ${userName} </p>
                    </div>
                </div>
                <div class="" style="width: 75%; height: 100%;">
                    <div class="rounded-top-1 text-center" style="background-color: #490019; color:white; font-size: 1.7vw" data-i18n="email">
                        Correo Electrónico
                    </div>
                    <div class="card-body rounded-bottom-1 px-4 pt-2" style="font-size: 1.5vw">
                            <p>${email}</p>
                    </div>
                </div>
            </div>
`

}

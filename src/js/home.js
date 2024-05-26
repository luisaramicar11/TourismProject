const slice1 = document.querySelector("#slice-1")
const slice2 = document.querySelector("#slice-2")

const comments = [
    "¡Tuvimos un tiempo increíble en nuestro tour! La atención al detalle de la empresa y su compromiso con el cliente realmente se destacaron. ¡Muy recomendado!",
    "¡Exceptional service and unforgettable experiences! This tourism company exceeded all our expectations. Highly recommend!",
    "Our trip was perfectly organized from start to finish. The guides were knowledgeable and friendly, making every moment enjoyable.",
    "A fantastic adventure! We saw so many beautiful sights and learned so much about the local culture. Thank you for an amazing experience!",
    "¡La mejor experiencia de viaje que hemos tenido! Los guías eran apasionados y entretenidos, y los destinos eran impresionantes. ¡Un gran agradecimiento a todo el equipo!",
    "Our tour was a dream come true. The accommodations were excellent, and the itinerary was well-planned. We felt well taken care of throughout the entire trip."
]

async function getUserInformation (){
    let userInformation
    const answer = await fetch("https://api.escuelajs.co/api/v1/users",)
    return userInformation = await answer.json()
}

export async function putComments() {
    let userInformation = await getUserInformation()
    for (let i = 0; i < 3; i++) {
        slice1.innerHTML += `
        
        <div class="card">
            <div class="card-body d-flex flex-column text-center gap-4">
                <div class = "avatar-info d-flex align-items-center justify-content-center gap-4">
                    <img src="${userInformation[i]['avatar']}" alt="photo-user" id="user-avatar" class="w-50">
                    <div>
                        <h5 class="card-title">${userInformation[i]['name']}</h5>
                        <p>${userInformation[i]['role']}</p>
                    </div>
                </div>
                <p class="card-text h-75">"${comments[i]}"</p>
            </div>
        </div>
        `
    }

    for (let i = 3; i < 6; i++) {
        slice2.innerHTML += `
        
        <div class="card w-75">
            <div class="card-body d-flex flex-column text-center gap-4">
                <div class = "avatar-info d-flex align-items-center justify-content-center gap-4">
                    <img src="${userInformation[i]['avatar']}" alt="photo-user" id="user-avatar" class="w-50">
                    <div>
                        <h5 class="card-title">${userInformation[i]['name']}</h5>
                        <p>${userInformation[i]['role']}</p>
                    </div>
                </div>
                <p class="card-text h-75">"${comments[i]}"</p>
            </div>
        </div>
        `
    }
}
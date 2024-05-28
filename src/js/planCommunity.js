// Función que recupera la información de la experiencia seleccionada en /tourismo y la pinta
export function infoCommunity(plan) {
  let community = JSON.parse(localStorage.getItem("community"));
  //console.log(community);
  if (community) {
    document.querySelector(plan).innerHTML = `
          <div class="hero-image d-flex flex-column justify-content-center align-items-center text-white text-center ">
        <div class="hero-opacity"></div>
        <div class="hero-content d-md-flex h-100">
            
                <div class="z-3 content-hero align-self-md-start align-self-lg-start w-50 text-md-start align-self-xl-start ">
                    <h1 class="fw-bold">${community.community_name}</h1>
                    <h2 class="">${community.defining_phrase}</h2>
                    <p class="">${community.importance_description}</p>
                </div>
                <div class="d-flex align-items-end justify-content-center align-self-md-end align-self-lg-end align-self-xl-end">
                    <button class="z-3 fs-4 btn btn-custom fw-bold text-white p-4" id="quiero-comprar">QUIERO COMPRAR</button>
                </div> 
        </div>
    </div>
  </section>
  
  <section class="mt-5 p-4">
    <h2 class="title-plan text-center fw-bold">${community.community_name}</h2>
    <p class="text-center fs-3 fw-bold mb-5">${community.why_know_community}</p>
    <p class="fs-4">${community.representative_phrase}</p>
    <article class=" container-images d-flex flex-wrap">
        <img src="${community.images[0]}" class="images" alt="">
        <img src="${community.images[1]}" class="images" alt="">
        <img src="${community.images[2]}" class="images" alt="">
        <img src="${community.images[3]}" class="images" alt="">
    </article>
  </section>
  
  <section class="description-plan">
  <h2 class="fw-bold fs-2 title-description-plan">Descripción del plan</h2>
  <div class="p-5 container-description-plan">
   <ul class="list-includes m-0">
    <li class="fs-4"><i class="bi bi-people-fill"></i>${community.plan_description.travel_time}</li>
    <li class="fs-4"><i class="bi bi-check-circle-fill fs-4"></i> ${community.plan_description.suitable_for_group}</li>
   </ul>
   <ul class="list-includes">
    <li class="fs-4"><i class="bi bi-person-fill-check"></i>${community.plan_description.includes_native_guide}</li>
    <li class="fs-4"><i class="bi bi-globe-americas"></i>${community.plan_description.unique_experiences}</li>
   </ul>
  </div>
  </section>
  
  <section class="">
  <p class="fs-2 fw-bold itinerary">Itinerario</p>
  <div class="accordion" id="accordionExample">
    <div class="accordion-item rounded-0">
      <h2 class="accordion-header">
        <button class="accordion-button fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          ${community.activity_itinerary.day_1.nameDay}
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <p>${community.activity_itinerary.day_1.description.act_1}</p>
          <p>${community.activity_itinerary.day_1.description.act_2}</p>
          <p>${community.activity_itinerary.day_1.description.act_3}</p>
          <p>${community.activity_itinerary.day_1.description.act_4}</p>
          <p>${community.activity_itinerary.day_1.description.act_5}</p>
          <p>${community.activity_itinerary.day_1.description.act_6}</p>
          <img src="${community.activity_itinerary.day_1.image}" class="img-fluid" alt=" ${community.activity_itinerary.day_1.nameDay}">
        </div>
      </div>
    </div>
    <div class="accordion-item rounded-0">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        ${community.activity_itinerary.day_2.nameDay}
        </button>
      </h2>
      <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
        <p>${community.activity_itinerary.day_2.description.act_1}</p>
        <p>${community.activity_itinerary.day_2.description.act_2}</p>
        <p>${community.activity_itinerary.day_2.description.act_3}</p>
        <p>${community.activity_itinerary.day_2.description.act_4}</p>
        <p>${community.activity_itinerary.day_2.description.act_5}</p>
        <p>${community.activity_itinerary.day_2.description.act_6}</p>
        <img src="${community.activity_itinerary.day_2.image}" alt=" ${community.activity_itinerary.day_2.nameDay}">
        </div>
      </div>
    </div>
    <div class="accordion-item rounded-0">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        ${community.activity_itinerary.day_3.nameDay}
        </button>
      </h2>
      <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
        <p>${community.activity_itinerary.day_3.description.act_1}</p>
        <p>${community.activity_itinerary.day_2.description.act_2}</p>
        <p>${community.activity_itinerary.day_2.description.act_3}</p>
        <p>${community.activity_itinerary.day_2.description.act_4}</p>
        <p>${community.activity_itinerary.day_2.description.act_5}</p>
        <p>${community.activity_itinerary.day_2.description.act_6}</p>
        <img src="${community.activity_itinerary.day_2.image}" alt="${community.activity_itinerary.day_3.nameDay}">
        </div>
      </div>
    </div>
  </div>
  </section>
  <section>
  <h2 class="list-style-title fw-bold itinerary fs-2">Qué incluye la experiencia?</h2>
  <div class="bg-custom-list-includes p-3 mt-5">
    <ul class="list-includes">
      <li class="fs-4"><i class="bi bi-check-circle-fill fs-4"></i>Transporte ida y regreso en avión</li>
      <li class="fs-4"><i class="bi bi-check-circle-fill fs-4"></i>Alojamiento en hotel</li>
      <li class="fs-4"><i class="bi bi-check-circle-fill fs-4"></i>Alimentación: 2 desayunos, 3 almuerzos y 2 cenas</li>
      <li class="fs-4"><i class="bi bi-check-circle-fill fs-4"></i>Visitas a lugares planeaos en el itinerario</li>
      <li class="fs-4"><i class="bi bi-check-circle-fill fs-4"></i>Seguro de viaje</li>
      <li class="fs-4"><i class="bi bi-check-circle-fill fs-4"></i>Guía profesional</li>
  </ul>
  </div>
  <h2 class="list-style-title fw-bold itinerary fs-2">No incluye</h2>
  <div class="bg-custom-list-includes p-3 mt-5">
    <ul class="list-includes">
      <li class="fs-4"><i class="bi bi-slash-circle fs-4"></i>Gastos no especificados en el plan</li>
      <li class="fs-4"><i class="bi bi-slash-circle fs-4"></i>Alimentación no especificada</li>
  </ul>
  </div>       
        `;
  } else {
    document.querySelector(plan).innerHTML =
      "<p>No hay información disponible.</p>";
  }

  // Envia al cliente a /tourismo para hacer la compra
  document.getElementById("quiero-comprar").onclick = function () {
    console.log("click");
    window.location.href = "/turismo";
  };
}

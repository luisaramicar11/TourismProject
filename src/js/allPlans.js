//Función que guarda la información del plan seleccionado en /tourismo para poder ser pintada en /plan
export function getTravel(travel) {
  let community = travel;
  localStorage.setItem("community", JSON.stringify(community));
  window.location.href = "/plans";
}

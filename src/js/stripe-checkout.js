import STRIPE_KEYS from "./stripe-keys";
import { getTravel } from "./allPlans";
import { itineraries } from "./crudItineraries.js";

// Realiza toda la lógica necesaria para poder usar stripe como pasarela de pagos
export async function stripeCheckout(classContainerCards, eachContainer) {
  let products;
  let prices;
  const travels = await itineraries();
  const containerCards = document.querySelector(classContainerCards);
  const fetchOptions = {
    headers: {
      Authorization: `Bearer ${STRIPE_KEYS.secret}`,
    },
  };

  const moneyFormat = (num) => `$${num.slice(0, -2)}.${num.slice(-2)}`;

  try {
    const [productsResponse, pricesResponse] = await Promise.all([
      fetch("https://api.stripe.com/v1/products", fetchOptions),
      fetch("https://api.stripe.com/v1/prices", fetchOptions),
    ]);

    if (!productsResponse.ok || !pricesResponse.ok) {
      throw new Error('Error fetching data from Stripe API');
    }

    const productsData = await productsResponse.json();
    const pricesData = await pricesResponse.json();

    products = productsData.data;
    prices = pricesData.data;

    prices.forEach((el) => {
      let productData = products.find((product) => product.id === el.product);
      if (productData) {
        containerCards.innerHTML += `
          <div class="each-container card text-black border-0" data-price="${el.id}" style="width: 18rem;">
            <img src="${productData.images[0]}" class="card-img-top no-rounded-top position-relative" alt="${productData.name}">
            <div class="card-body d-flex flex-column justify-content-end">
              <div class="card-price align-self-center position-absolute top-50">
                <p class="card-title text-center m-0">Precio</p>
                <p class="card-text text-center">${moneyFormat(el.unit_amount_decimal)} ${el.currency}</p>
              </div>
              <div class="d-flex flex-column buy-experience">
                <div class="card-place d-flex flex-column justify-content-end align-items-start">
                  <button class="card-title border-0 card-title-community m-0 community bg-transparent" data-price="${el.id}">${productData.name}</button>
                </div>
                <div class="d-flex flex-column gap-3 align-items-center">
                  <button type="button" class="btn btn-buy-plan">Comprar</button>
                </div>
              </div>
            </div>
          </div>`;
      }
    });

    if (containerCards.firstChild) {
      containerCards.removeChild(containerCards.firstChild);
    }
    
  } catch (err) {
    console.error(err);
    let message = err.message || "Ocurrió un error al conectarse con la API de Stripe";
    containerCards.innerHTML = `<p>Error: ${message}</p>`;
  }

  document.addEventListener("click", (e) => {
    console.log(e.target)
    if (e.target.matches(".btn-buy-plan")) {
      let price = e.target.closest(".each-container").getAttribute("data-price");
      Stripe(STRIPE_KEYS.public)
        .redirectToCheckout({
          lineItems: [{ price: price, quantity: 1 }],
          mode: "subscription",
          successUrl: "http://localhost:5173/pagoexitoso",
          cancelUrl: "http://localhost:5173/pagonegado",
        })
        .then((res) => {
          if (res.error) {
            containerCards.insertAdjacentHTML("afterend", res.error.message);
          }
        });
    }
    if (e.target.matches(".card-title-community")) {
      let attribute = e.target.getAttribute("data-price");
      let travel;
      if (attribute === "price_1PKgnRBrpCweGOwOdCRUDEcV") {
        travel = travels[0];
      }
      if (attribute === "price_1PK7GSBrpCweGOwOaysDAhdF") {
        travel = travels[1];
      }
      if (attribute === "price_1PK7FBBrpCweGOwOCPXRbsoo") {
        travel = travels[2];
      }
      if (attribute === "price_1PK7DwBrpCweGOwO3gv75VKa") {
        travel = travels[3];
      }
      if (attribute === "price_1PK7AHBrpCweGOwO3bkjOUbF") {
        travel = travels[4];
      }
      if (attribute === "price_1PK790BrpCweGOwOtjxyVUMu") {
        travel = travels[5];
      }
      if (attribute === "price_1PK77dBrpCweGOwOdMWwYpzr") {
        travel = travels[6];
      }
      if (attribute === "price_1PK769BrpCweGOwOuuzup9Js") {
        travel = travels[7];
      }
      if (attribute === "price_1PK73VBrpCweGOwOAdIFDnXp") {
        travel = travels[8];
      }
      if (attribute === "price_1Mg6aQBrpCweGOwOi7W2r7qS") {
        travel = travels[9]; 
      }
      getTravel(travel);
    }
  });
}
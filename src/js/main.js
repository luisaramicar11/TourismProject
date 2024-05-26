//Maneja todos los archivos js usados en el proyecto
import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'
import {routes} from "./routes.js"
import { infoCommunity } from './planCommunity.js'
import {stripeCheckout} from './stripe-checkout.js'

routes();

setTimeout(() => {
    stripeCheckout(".container-cards-plan");
    }, 100);


if (window.location.pathname === '/plans') {
    setTimeout(() => {
    infoCommunity(".plan-community")
    }, 100);
}
 











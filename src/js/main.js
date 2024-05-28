//Maneja todos los archivos js usados en el proyecto
import '../scss/styles.scss'
import * as bootstrap from 'bootstrap'
import {routes} from "./routes.js"
import { infoCommunity } from './planCommunity.js'
import {stripeCheckout} from './stripe-checkout.js'
import { putComments } from './home.js'
import {register} from './register.js'
import {formValidations} from "./validations.js"
import {login} from "./login.js"


//import {translate} from "./translate.js"

// Selecting input fields from the form

routes();

setTimeout(() => {
    stripeCheckout(".container-cards-plan");
    putComments("#slice-1", "#slice-2");
    register(".register-form", ".user-name", ".last-name", ".email", ".password-sign-up", ".confirm-password", ".traigo info");
    formValidations(".register-form [required]");
    login(".register-form-signin", ".email-signin", ".password-signin")
    }, 1000);
    if (window.location.pathname === '/plans') {
      setTimeout(() => {
      infoCommunity(".plan-community")
      }, 100);
  }



    document.addEventListener('DOMContentLoaded', () => {
        const languageSelector = document.getElementById('language-selector');
        languageSelector.addEventListener('change', (event) => {
          const selectedLanguage = event.target.value;
          loadLanguage(selectedLanguage);
        });
      
        // Load default language (Spanish)
        loadLanguage('es');
      });
      
      function loadLanguage(language) {
        fetch(`public//locales/${language}/translation.json`)
          .then(response => response.json())
          .then(translations => {
            updateTextContent(translations);
          })
          .catch(error => console.error('Error loading language:', error));
      }
      
      function updateTextContent(translations) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
          const key = element.getAttribute('data-i18n');
          if (translations[key]) {
            element.textContent = translations[key];
          }
        });
      }
      

//translate('[data-i18n]')    

//funciones de comunidades y nosotros
/* $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });
 *//* 
  (function() {
    'use strict';
    window.addEventListener('load', function() {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})(); */




// Dashboard

// (function () {
//     const userSesion = localStorage.getItem("userSesion")
//     if (userSesion == null) {
//         window.location.href = "/"
//     }
// })()

// const btnLogout = document.getElementById("btn-logout")

// btnLogout.addEventListener("click", () => {
//     localStorage.removeItem("userSesion")
//     window.location.href = "/"
// })

// //Inserccion de elementos al html con variables de js, para lograr unos componenentes personalizados para cada usuario

// let registerUser

// // Obtener todas las claves del localStorage
// const keys = Object.keys(localStorage);

// // Iterar sobre las claves y obtener los valores
// keys.forEach(function (key) {
//     const value = localStorage.getItem(key);
//     registerUser = JSON.parse(value);;
// });

// const userName = registerUser.userName
// const lastName = registerUser.lastName
// const email = registerUser.email
// const idUser = registerUser.id
// const registerUserHTML = document.getElementById("persona-info")
// const textLogo = document.getElementById("textLogo")
// const firstLetterName = userName.charAt(0).toUpperCase()
// const firstLetterLastName = lastName.charAt(0).toUpperCase()


// registerUserHTML.innerHTML = `
// <div class="card">
//     <div class="card-header fs-5" style="background-color: #490019; color:white" >
//         Informacion Personal
//     </div>
//     <div class="card-body">
//         <blockquote class="blockquote mb-0">
//             <p><span>ID:${idUser}</span>| Nombre de usuario: ${userName} ${lastName} </p>
//             <footer class="blockquote-footer">Correo Electronico <cite title="Source Title">${email}</cite>
//             </footer>
//         </blockquote>
//     </div>
// </div>
// `
// textLogo.innerHTML = `
// <div class="d-flex" style="width:100%">
//     <div class="rounded-circle " style="background-color: #490019; width: 15vw; height: 15vw">
//         <span class="d-flex justify-content-center" style="font-size: 9vw; color:white" >
//             ${firstLetterName}${firstLetterLastName}
//         </span>
//     </div>
//     <div class="d-flex align-items-end" style="width: 50vw;height: 18vw">
//         <h3 class="text-center " style="font-size: 4vw; border-bottom: solid #490019; color:#490019; ">¡Bienvenido ${userName} ${lastName}!</h3>
        
//     </div>


// </div>
// `

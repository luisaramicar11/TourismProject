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
import {translate} from "./translate.js"
import {dashboard} from "./dashboard.js"


// Selecting input fields from the form

routes();

setTimeout(() => {
    stripeCheckout(".container-cards-plan");
    putComments("#slice-1", "#slice-2");
    register(".register-form", ".user-name", ".last-name", ".email", ".password-sign-up", ".confirm-password");
    formValidations(".register-form [required]");
    
    }, 1000);
   
   

      
    if (window.location.pathname === '/plans') {
      setTimeout(() => {
      infoCommunity(".plan-community")
      }, 100);
  }

  if (window.location.pathname === '/signin') {
    setTimeout(() => {
      login("#form-signin", ".email-signin", ".password-signin")
    }, 100);
}

if (window.location.pathname === "/dashboard") {
  document.addEventListener("DOMContentLoaded",(e)=>{
    setTimeout(() => {
      dashboard("#btn-logout", ".name-user", ".email-user")
    }, 100);
      
  })

}
  
document.addEventListener('DOMContentLoaded', function() {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    item.addEventListener('click', function() {
      const collapseTarget = this.querySelector('.accordion-collapse');

      if (collapseTarget.classList.contains('show')) {
        collapseTarget.classList.remove('show');
      }
    });
  });
});

//Cambio de idioma
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
      

translate('[data-i18n]')    

//funciones de comunidades y nosotros
/$('.slider-for').slick({
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
})();


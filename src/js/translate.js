//esto lo traje de la pagina https://www.i18next.com/overview/getting-started
import i18next from 'i18next';
import Backend from 'i18next-http-backend'

export function translate(datas){
    let language;
    let allDatas = document.querySelectorAll(datas)

if(localStorage.getItem('language')){
    language = localStorage.getItem('language')
}else{
    language = 'en'
}

i18next.use(Backend).init({
  lng: language, // if you're using a language detector, do not define the lng option
  debug: true,
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json'
  },
  ns:['translation'],
  defaultNS: 'translation'
}).then(() => updateContent())

allDatas.forEach(element => {
    const key = element.getAttribute('data-i18n')
    element.innerHTML = i18next.t(key)
})
   

window.changeLanguage = function(lng){
    i18next.changeLanguage(lng).then(() => {
        allDatas.forEach(element => {
            const key = element.getAttribute('data-i18n')
            element.innerHTML = i18next.t(key)
        })        
    })
    localStorage.setItem('language', lng)
}
}

export function updateContent(datas){
    let allDatas = document.querySelectorAll(datas)
    allDatas.forEach(element => {
        const key = element.getAttribute('data-i18n')
        element.innerHTML = i18next.t(key)
    })
   
}


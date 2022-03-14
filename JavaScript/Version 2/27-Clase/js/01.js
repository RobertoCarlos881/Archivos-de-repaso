//Eventos del DOM
//Clicks
const heading = document.querySelector('.heading')
heading.addEventListener('click', () => {
    heading.textContent = 'Nuevo heading al dar click'
})

const enlaces = document.querySelectorAll('.navegacion a')
enlaces.forEach( enlace => { 
    enlace.addEventListener('click', () => {
        enlace.textContent = 'Nuevo heading al dar click'
    })
})
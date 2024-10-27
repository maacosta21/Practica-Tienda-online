const inputUno = document.querySelector('#input-uno')
const inputDos = document.querySelector('#input-dos')
const btnSumar = document.querySelector('#bton-sumar')
const resultado = document.querySelector('#resultado')

btnSumar.addEventListener('click', () => {
   resultado.innerHTML = parseInt(inputUno.value)+parseInt(inputDos.value)
})

